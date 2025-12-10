import { useState } from "react";
import { Send, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const questions = [
  {
    id: "name",
    question: "What's your name?",
    type: "text",
    placeholder: "Enter your name"
  },
  {
    id: "phone",
    question: "Best phone number to reach you?",
    type: "tel",
    placeholder: "(409) 555-1234"
  },
  {
    id: "visit_frequency",
    question: "How often do you visit us?",
    type: "select",
    options: ["First time visitor", "Once a week", "Multiple times a week", "Monthly", "Rarely"]
  },
  {
    id: "favorite_product",
    question: "What's your favorite type of drink?",
    type: "select",
    options: ["Smoothies", "Loaded Teas", "Protein Shakes", "I haven't tried yet!", "All of them!"]
  },
  {
    id: "dietary",
    question: "Any dietary preferences we should know about?",
    type: "multiselect",
    options: ["Vegan", "Gluten-Free", "Low Sugar", "High Protein", "No Restrictions"]
  },
  {
    id: "feedback",
    question: "Any suggestions or feedback for us?",
    type: "textarea",
    placeholder: "We'd love to hear your thoughts..."
  }
];

export function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleNext = () => {
    if (currentQuestion.type === "multiselect") {
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedMulti }));
      setSelectedMulti([]);
    }
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleInputChange = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleSelectOption = (option: string) => {
    if (currentQuestion.type === "multiselect") {
      setSelectedMulti(prev => 
        prev.includes(option) 
          ? prev.filter(o => o !== option)
          : [...prev, option]
      );
    } else {
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
      // Auto-advance for single select
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep(prev => prev + 1);
        }
      }, 300);
    }
  };

  const handleSubmit = () => {
    // Save final answer
    if (currentQuestion.type === "multiselect") {
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedMulti }));
    }
    
    // Simulate EmailJS submission
    console.log("Form submitted:", answers);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="questionnaire" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground">
              We appreciate you taking the time to share your thoughts. See you at the Hangout!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="questionnaire" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Quick Survey</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Help Us <span className="text-gradient-tropical">Serve You Better</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Answer a few quick questions so we can personalize your experience
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="glass rounded-2xl p-8 min-h-[320px] flex flex-col">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-6 animate-fade-in-up">
              {currentQuestion.question}
            </h3>

            <div className="flex-1">
              {currentQuestion.type === "text" && (
                <Input
                  type="text"
                  placeholder={currentQuestion.placeholder}
                  value={(answers[currentQuestion.id] as string) || ""}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="text-lg py-6 bg-muted/50 border-border/50"
                />
              )}

              {currentQuestion.type === "tel" && (
                <Input
                  type="tel"
                  placeholder={currentQuestion.placeholder}
                  value={(answers[currentQuestion.id] as string) || ""}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="text-lg py-6 bg-muted/50 border-border/50"
                />
              )}

              {currentQuestion.type === "textarea" && (
                <Textarea
                  placeholder={currentQuestion.placeholder}
                  value={(answers[currentQuestion.id] as string) || ""}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="min-h-[120px] text-lg bg-muted/50 border-border/50 resize-none"
                />
              )}

              {(currentQuestion.type === "select" || currentQuestion.type === "multiselect") && (
                <div className="grid gap-3">
                  {currentQuestion.options?.map((option) => {
                    const isSelected = currentQuestion.type === "multiselect"
                      ? selectedMulti.includes(option)
                      : answers[currentQuestion.id] === option;
                    
                    return (
                      <button
                        key={option}
                        onClick={() => handleSelectOption(option)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? "bg-primary/20 border-primary text-foreground"
                            : "bg-muted/30 border-border/50 hover:bg-muted/50 hover:border-border"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                          }`}>
                            {isSelected && <span className="w-2 h-2 rounded-full bg-primary-foreground" />}
                          </span>
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>

              {currentStep === questions.length - 1 ? (
                <Button onClick={handleSubmit} className="gap-2">
                  Submit
                  <Send className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleNext} className="gap-2">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
