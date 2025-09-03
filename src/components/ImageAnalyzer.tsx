import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, Loader2, Utensils } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FoodItem {
  name: string;
  quantity: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface NutritionTotals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface WebhookEnvelope {
  action?: string;
  response?: {
    output: {
      status: string;
      food: FoodItem[];
      total: NutritionTotals;
    };
  };
  // Backward compatibility if API returns output at root
  output?: {
    status: string;
    food: FoodItem[];
    total: NutritionTotals;
  };
}

interface AnalysisResult {
  food: FoodItem[];
  total: NutritionTotals;
  status: string;
}

export function ImageAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }

    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
    setIsAnalyzing(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://rifuz.app.n8n.cloud/webhook-test/fcc68027-6eba-46b8-8124-1fc93a3bf4fe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const webhookData: WebhookEnvelope[] = await response.json();
      const analysisData = webhookData[0]?.response?.output ?? webhookData[0]?.output;

      if (!analysisData || !analysisData.food || !analysisData.total) {
        throw new Error('Analysis unsuccessful');
      }

      const result: AnalysisResult = {
        food: analysisData.food,
        total: analysisData.total,
        status: analysisData.status,
      };
      
      setResult(result);
      toast({
        title: "Analysis complete!",
        description: "Your meal has been analyzed successfully.",
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: "Please try again with a clearer image.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const MacroCard = ({ label, value, unit, color }: { label: string; value: number; unit: string; color: string }) => (
    <div className="text-center">
      <div className={`text-2xl font-bold ${color}`}>{value}{unit}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        capture="environment"
      />

      {!imagePreview ? (
        <Card className="border-dashed border-2 border-muted-foreground/25 shadow-card">
          <CardContent className="flex flex-col items-center justify-center py-12 px-6">
            <Utensils className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Upload Your Meal</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Take a photo or upload an image to get instant nutrition analysis
            </p>
            <div className="flex gap-3 w-full">
              <Button 
                onClick={triggerFileSelect}
                className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <Camera className="mr-2 h-4 w-4" />
                Camera
              </Button>
              <Button 
                onClick={triggerFileSelect}
                variant="outline" 
                className="flex-1"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-card">
          <CardContent className="p-0">
            <div className="relative">
              <img 
                src={imagePreview} 
                alt="Meal preview" 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {isAnalyzing && (
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-t-lg">
                  <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">Analyzing nutrition...</p>
                  </div>
                </div>
              )}
            </div>

            {result && (
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Nutrition Analysis</h3>
                  <Badge variant="secondary" className="bg-gradient-accent">
                    Analysis Complete
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-hero rounded-lg">
                  <MacroCard label="Protein" value={Math.round(result.total.protein * 10) / 10} unit="g" color="text-success" />
                  <MacroCard label="Carbs" value={Math.round(result.total.carbs * 10) / 10} unit="g" color="text-warning" />
                  <MacroCard label="Fat" value={Math.round(result.total.fat * 10) / 10} unit="g" color="text-accent" />
                  <MacroCard label="Calories" value={result.total.calories} unit="" color="text-primary" />
                </div>

                <div>
                  <h4 className="font-medium mb-2">Detected Foods:</h4>
                  <div className="space-y-2">
                    {result.food.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.quantity}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{item.calories} cal</div>
                          <div className="text-xs text-muted-foreground">
                            P: {item.protein}g • C: {item.carbs}g • F: {item.fat}g
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    setImagePreview(null);
                    setResult(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  variant="outline" 
                  className="w-full"
                >
                  Analyze Another Meal
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}