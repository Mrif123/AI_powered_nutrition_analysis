import { ImageAnalyzer } from '@/components/ImageAnalyzer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Camera } from 'lucide-react';
import heroMeal from '@/assets/hero-meal.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-gradient-accent text-accent-foreground" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Powered by AI
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Calories AI
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Snap a photo, get instant nutrition analysis
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
                Upload or capture any meal and our AI will analyze the macronutrients in seconds. Track protein, carbs, fat, and calories effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Camera className="mr-2 h-5 w-5" />
                  Try It Free
                </Button>
                <Button size="lg" variant="outline">
                  <Zap className="mr-2 h-5 w-5" />
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <img 
                  src={heroMeal} 
                  alt="Healthy meal with salmon, quinoa and vegetables" 
                  className="w-full rounded-2xl shadow-card"
                />
                <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-glow border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">450</div>
                    <div className="text-sm text-muted-foreground">calories</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-card rounded-xl p-3 shadow-glow border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-success">32g</div>
                    <div className="text-xs text-muted-foreground">protein</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Yourself</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload a photo of your meal and get detailed nutrition analysis in seconds
            </p>
          </div>
          <div className="flex justify-center">
            <ImageAnalyzer />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
              <p className="text-muted-foreground">
                Just snap a photo and get comprehensive nutrition data in seconds
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
              <p className="text-muted-foreground">
                Advanced machine learning models trained on thousands of foods
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
              <p className="text-muted-foreground">
                Get precise macronutrient breakdowns with confidence scores
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
