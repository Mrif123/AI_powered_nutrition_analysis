import { ImageAnalyzer } from '@/components/ImageAnalyzer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Camera, Target, Clock, Shield, ChefHat, Apple, Activity } from 'lucide-react';
import heroMeal from '@/assets/hero-meal.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background organic-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero border-b tech-grid-overlay">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left space-y-6">
              <Badge className="inline-flex mb-2 bg-gradient-accent text-accent-foreground border-0" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Powered by AI
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
                Calories AI
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                Snap a photo, get instant nutrition analysis
              </p>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Upload any meal photo and our AI analyzes macronutrients in seconds. Track protein, carbs, fat, and calories effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="xl" variant="cta" className="shadow-button">
                  <Camera className="mr-2 h-6 w-6" />
                  Analyze Your Meal Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
                  <Zap className="mr-2 h-5 w-5" />
                  See Demo
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="flex justify-center lg:justify-start gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>2 sec analysis</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="h-4 w-4 text-primary" />
                  <span>95% accuracy</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Free to use</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto max-w-lg">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
                <img 
                  src={heroMeal} 
                  alt="Healthy meal with salmon, quinoa and vegetables" 
                  className="relative w-full rounded-3xl shadow-card hover:shadow-glow transition-all duration-300"
                />
                {/* Floating nutrition cards */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-glow border backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">450</div>
                    <div className="text-sm font-medium text-muted-foreground">calories</div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-card rounded-2xl p-3 shadow-glow border backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-xl font-black text-success">32g</div>
                    <div className="text-xs font-medium text-muted-foreground">protein</div>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 bg-card rounded-xl p-2 shadow-card border backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-warning">18g</div>
                    <div className="text-xs text-muted-foreground">fat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gradient-feature organic-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-3 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Why Choose Calories AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets simple, powerful nutrition tracking
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-2xl bg-card border hover:shadow-card transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-button">
                <Camera className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Snap any meal and get comprehensive nutrition data in under 2 seconds with industry-leading accuracy
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card border hover:shadow-card transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-button">
                <Activity className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI trained on millions of food images recognizes ingredients, portions, and cooking methods automatically
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card border hover:shadow-card transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-button">
                <Target className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Precise Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get detailed macronutrient breakdowns with confidence scores and ingredient-level analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="inline-flex mb-4 bg-gradient-accent text-accent-foreground border-0">
              <ChefHat className="mr-1 h-3 w-3" />
              Try It Now
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Upload a photo of your meal and watch our AI work its magic
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-hero rounded-3xl p-8 border shadow-card">
              <ImageAnalyzer />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-gradient-feature border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div>
              <div className="text-3xl font-black text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Photos Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-black text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-black text-primary mb-1">2s</div>
              <div className="text-sm text-muted-foreground">Average Time</div>
            </div>
            <div>
              <div className="text-3xl font-black text-primary mb-1">Free</div>
              <div className="text-sm text-muted-foreground">Always</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
