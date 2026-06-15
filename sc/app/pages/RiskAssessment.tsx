import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Progress } from "../components/ui/progress";
import { AlertCircle, CheckCircle2, Info, ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

export default function RiskAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: "What is your age?",
      options: [
        { value: "under40", label: "Under 40", risk: 0 },
        { value: "40-49", label: "40-49 years", risk: 1 },
        { value: "50-59", label: "50-59 years", risk: 2 },
        { value: "60plus", label: "60 or older", risk: 3 }
      ]
    },
    {
      id: 1,
      question: "Do you have a family history of breast cancer?",
      options: [
        { value: "no", label: "No family history", risk: 0 },
        { value: "distant", label: "Distant relatives only", risk: 1 },
        { value: "oneclose", label: "One close relative (mother, sister, daughter)", risk: 3 },
        { value: "multiple", label: "Multiple close relatives", risk: 4 }
      ]
    },
    {
      id: 2,
      question: "Have you been diagnosed with any breast conditions?",
      options: [
        { value: "none", label: "No previous breast conditions", risk: 0 },
        { value: "benign", label: "Benign (non-cancerous) breast disease", risk: 1 },
        { value: "atypical", label: "Atypical hyperplasia or LCIS", risk: 3 },
        { value: "previous", label: "Previous breast cancer", risk: 5 }
      ]
    },
    {
      id: 3,
      question: "Have you had genetic testing for BRCA1/BRCA2 mutations?",
      options: [
        { value: "notested", label: "Not tested", risk: 0 },
        { value: "negative", label: "Tested negative", risk: 0 },
        { value: "positive", label: "Tested positive", risk: 5 },
        { value: "other", label: "Other genetic mutation identified", risk: 3 }
      ]
    },
    {
      id: 4,
      question: "What was your age at first menstrual period?",
      options: [
        { value: "14plus", label: "14 or older", risk: 0 },
        { value: "12-13", label: "12-13 years", risk: 1 },
        { value: "under12", label: "Under 12 years", risk: 2 },
        { value: "unknown", label: "Don't know", risk: 0 }
      ]
    },
    {
      id: 5,
      question: "Have you experienced menopause?",
      options: [
        { value: "no", label: "No, still menstruating", risk: 0 },
        { value: "before50", label: "Yes, before age 50", risk: 0 },
        { value: "after55", label: "Yes, after age 55", risk: 2 },
        { value: "surgical", label: "Surgical menopause", risk: 0 }
      ]
    },
    {
      id: 6,
      question: "Have you had children?",
      options: [
        { value: "before30", label: "Yes, first child before age 30", risk: 0 },
        { value: "after30", label: "Yes, first child after age 30", risk: 1 },
        { value: "no", label: "No children", risk: 2 },
        { value: "prefer", label: "Prefer not to answer", risk: 0 }
      ]
    },
    {
      id: 7,
      question: "What is your current lifestyle?",
      options: [
        { value: "active", label: "Regular exercise, healthy diet, no alcohol", risk: 0 },
        { value: "moderate", label: "Some exercise, moderate diet, occasional alcohol", risk: 1 },
        { value: "sedentary", label: "Sedentary, poor diet, regular alcohol use", risk: 2 },
        { value: "varies", label: "Varies", risk: 1 }
      ]
    }
  ];

  const calculateRisk = () => {
    let totalRisk = 0;
    questions.forEach((q) => {
      const answer = answers[q.id];
      const option = q.options.find(opt => opt.value === answer);
      if (option) {
        totalRisk += option.risk;
      }
    });
    return totalRisk;
  };

  const getRiskLevel = (score: number) => {
    if (score <= 5) return { level: "Low", color: "green", description: "Your risk factors suggest a lower-than-average risk." };
    if (score <= 12) return { level: "Moderate", color: "yellow", description: "You have some risk factors that warrant regular screening." };
    if (score <= 18) return { level: "Elevated", color: "orange", description: "You have multiple risk factors. Discuss enhanced screening with your doctor." };
    return { level: "High", color: "red", description: "You have significant risk factors. Consult with a specialist about your screening options." };
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const riskScore = calculateRisk();
  const riskLevel = getRiskLevel(riskScore);

  if (showResults) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Your Risk Assessment Results</CardTitle>
              <CardDescription>Based on your answers to the questionnaire</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900">Important Disclaimer</AlertTitle>
                <AlertDescription className="text-blue-800">
                  This assessment is for educational purposes only and does not constitute medical advice. 
                  Please consult with a healthcare professional for personalized risk assessment and screening recommendations.
                </AlertDescription>
              </Alert>

              <div className="text-center py-8">
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-4 ${
                  riskLevel.color === 'green' ? 'bg-green-100' :
                  riskLevel.color === 'yellow' ? 'bg-yellow-100' :
                  riskLevel.color === 'orange' ? 'bg-orange-100' : 'bg-red-100'
                }`}>
                  <div>
                    <div className={`text-4xl font-bold ${
                      riskLevel.color === 'green' ? 'text-green-700' :
                      riskLevel.color === 'yellow' ? 'text-yellow-700' :
                      riskLevel.color === 'orange' ? 'text-orange-700' : 'text-red-700'
                    }`}>
                      {riskLevel.level}
                    </div>
                    <div className="text-sm text-gray-600">Risk Level</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6">{riskLevel.description}</p>
              </div>

              <Card className="bg-gradient-to-br from-pink-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-pink-600" />
                    Recommended Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {riskLevel.level === "Low" && (
                    <>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                        <p>Continue regular self-examinations monthly</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                        <p>Begin annual mammograms at age 40, or as recommended by your doctor</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                        <p>Maintain a healthy lifestyle with regular exercise and balanced diet</p>
                      </div>
                    </>
                  )}
                  {riskLevel.level === "Moderate" && (
                    <>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                        <p>Perform monthly self-examinations and track any changes</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                        <p>Schedule annual mammograms starting at age 40 or earlier if recommended</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                        <p>Discuss your family history and risk factors with your doctor</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">4</div>
                        <p>Consider lifestyle modifications to reduce modifiable risk factors</p>
                      </div>
                    </>
                  )}
                  {(riskLevel.level === "Elevated" || riskLevel.level === "High") && (
                    <>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                        <p>Schedule an appointment with a breast health specialist or oncologist</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                        <p>Discuss enhanced screening options including MRI and earlier/more frequent mammograms</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                        <p>Consider genetic counseling if you haven't been tested for BRCA mutations</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">4</div>
                        <p>Explore risk reduction options with your healthcare team</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">5</div>
                        <p>Join a support group or connect with resources for high-risk individuals</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Next Steps</AlertTitle>
                <AlertDescription>
                  Regardless of your risk level, it's important to be proactive about your breast health. 
                  Schedule regular checkups, perform self-examinations, and discuss any concerns with your healthcare provider.
                </AlertDescription>
              </Alert>

              <div className="flex gap-4 justify-center pt-4">
                <Button onClick={handleReset} variant="outline" className="gap-2">
                  <RotateCcw className="size-4" />
                  Take Assessment Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-4">
            <Info className="size-4" />
            <span className="text-sm font-medium">Interactive Assessment</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Breast Cancer Risk Assessment</h1>
          <p className="text-xl text-gray-600">
            Answer these questions to better understand your personal risk factors
          </p>
        </div>

        <Alert className="mb-8 bg-amber-50 border-amber-200">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-900">Educational Tool Only</AlertTitle>
          <AlertDescription className="text-amber-800">
            This assessment is not a diagnostic tool and cannot determine if you have breast cancer. 
            It's designed to help you understand common risk factors. Always consult with a healthcare 
            professional for personalized medical advice.
          </AlertDescription>
        </Alert>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Question {currentStep + 1} of {questions.length}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
            <CardDescription>Select the option that best describes your situation</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentStep] || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:border-pink-200 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 size-4" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[currentStep]}
                className="flex-1 bg-pink-600 hover:bg-pink-700"
              >
                {currentStep === questions.length - 1 ? "View Results" : "Next"}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
