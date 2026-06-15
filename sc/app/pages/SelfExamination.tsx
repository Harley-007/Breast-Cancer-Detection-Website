import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Hand, 
  Eye, 
  Clock, 
  Calendar, 
  AlertCircle, 
  Info,
  CheckCircle2,
  Circle
} from "lucide-react";

export default function SelfExamination() {
  const [currentStep, setCurrentStep] = useState(0);

  const visualSteps = [
    {
      title: "Stand in Front of a Mirror",
      description: "Look at your breasts with your arms at your sides",
      whatToLookFor: [
        "Changes in size, shape, or symmetry",
        "Visible lumps or distortions",
        "Dimpling, puckering, or bulging of the skin",
        "Nipple position changes or inversion",
        "Redness, rash, or swelling"
      ],
      tips: "Use good lighting and a large mirror. Compare both breasts."
    },
    {
      title: "Raise Your Arms",
      description: "Lift your arms above your head and look for the same changes",
      whatToLookFor: [
        "Any changes in breast contour",
        "Skin dimpling or irregularities",
        "Changes in nipple appearance",
        "Asymmetry between breasts"
      ],
      tips: "This position may make certain changes more visible."
    },
    {
      title: "Check for Nipple Discharge",
      description: "Gently squeeze each nipple between your thumb and index finger",
      whatToLookFor: [
        "Fluid discharge (clear, milky, yellowish, or bloody)",
        "Discharge from one or both nipples",
        "Spontaneous discharge without squeezing"
      ],
      tips: "A small amount of discharge can be normal, but report any new or unusual discharge to your doctor."
    }
  ];

  const manualSteps = [
    {
      title: "Lying Down Examination",
      description: "Lie down and place a pillow under your right shoulder",
      instructions: [
        "Put your right arm behind your head",
        "Use the finger pads of your left hand to examine your right breast",
        "Use circular motions, about the size of a quarter",
        "Cover the entire breast from collarbone to abdomen, armpit to cleavage",
        "Use three levels of pressure: light, medium, and firm",
        "Repeat on the left breast"
      ],
      pattern: "Use an up-and-down pattern, moving from your armpit to the middle of your chest"
    },
    {
      title: "Standing or Sitting",
      description: "Repeat the examination while standing or sitting",
      instructions: [
        "Many women find this easiest in the shower",
        "Wet, soapy skin makes it easier to feel breast tissue",
        "Use the same circular motion and pressure levels",
        "Cover the entire breast area",
        "Don't forget to check the armpit area"
      ],
      pattern: "Use the same systematic pattern as when lying down"
    }
  ];

  const whenToCheck = [
    {
      title: "For Menstruating Women",
      timing: "3-5 days after your period ends",
      reason: "Breasts are least likely to be swollen or tender",
      icon: Calendar
    },
    {
      title: "For Post-Menopausal Women",
      timing: "Same day each month (e.g., first day of the month)",
      reason: "Consistency helps you remember and notice changes",
      icon: Clock
    },
    {
      title: "During Pregnancy or Breastfeeding",
      timing: "Same time each month, despite changes",
      reason: "Helps you learn what's normal for you during this time",
      icon: Calendar
    }
  ];

  const warningSign = [
    "A new lump or hard knot in the breast or underarm",
    "Changes in breast size or shape",
    "Dimpling or puckering of the skin",
    "Itchy, scaly sore or rash on the nipple",
    "Pulling in of the nipple or other parts of the breast",
    "Nipple discharge that starts suddenly",
    "New pain in one spot that doesn't go away",
    "Skin that's red, swollen, warm, or darkened"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-4 py-2 mb-4">
            <Hand className="size-4" />
            <span className="text-sm font-medium">Self-Care Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Breast Self-Examination</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A step-by-step guide to performing monthly breast self-examinations at home
          </p>
        </div>

        <Alert className="mb-8 bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-900">Important to Know</AlertTitle>
          <AlertDescription className="text-blue-800">
            Breast self-examination is a tool for breast awareness, but it's not a substitute for 
            regular mammograms or clinical breast exams. Most breast changes are not cancer, but 
            any new or unusual changes should be reported to your healthcare provider.
          </AlertDescription>
        </Alert>

        {/* Why Self-Examination Matters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Why Perform Self-Examinations?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="size-8 text-pink-600" />
                </div>
                <h3 className="font-bold mb-2">Know What's Normal</h3>
                <p className="text-sm text-gray-600">
                  Regular self-exams help you become familiar with how your breasts normally look and feel
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="size-8 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Early Detection</h3>
                <p className="text-sm text-gray-600">
                  Finding changes early can lead to earlier diagnosis and better treatment outcomes
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hand className="size-8 text-teal-600" />
                </div>
                <h3 className="font-bold mb-2">Take Control</h3>
                <p className="text-sm text-gray-600">
                  Empower yourself to be an active participant in your breast health
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Perform */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">When to Perform Self-Examination</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whenToCheck.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <item.icon className="size-6 text-pink-600 mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Best Time:</div>
                    <div className="font-bold text-pink-600">{item.timing}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Why:</div>
                    <div className="text-sm">{item.reason}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Step-by-Step Guide</h2>
          
          <Tabs defaultValue="visual" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="visual">Visual Inspection</TabsTrigger>
              <TabsTrigger value="manual">Manual Examination</TabsTrigger>
            </TabsList>

            <TabsContent value="visual">
              <div className="space-y-4">
                {visualSteps.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle>{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="ml-13 space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">What to Look For:</h4>
                        <ul className="space-y-1">
                          {step.whatToLookFor.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="size-4 flex-shrink-0 mt-0.5 text-pink-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertDescription>{step.tips}</AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="manual">
              <div className="space-y-4">
                {manualSteps.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle>{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="ml-13 space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">How to Examine:</h4>
                        <ol className="space-y-2">
                          {step.instructions.map((instruction, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm">
                              <Circle className="size-2 flex-shrink-0 mt-1.5 fill-teal-600 text-teal-600" />
                              <span>{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <Alert className="bg-teal-50 border-teal-200">
                        <Info className="h-4 w-4 text-teal-600" />
                        <AlertTitle className="text-teal-900">Pattern Tip</AlertTitle>
                        <AlertDescription className="text-teal-800">{step.pattern}</AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pressure Levels */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Using the Right Amount of Pressure</CardTitle>
            <CardDescription>
              Use three different pressure levels to examine all breast tissue thoroughly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <h3 className="font-bold mb-2 text-blue-900">Light Pressure</h3>
                <p className="text-sm text-blue-800 mb-3">
                  Feel the tissue closest to the skin
                </p>
                <div className="text-xs text-blue-700">
                  Just enough to move the skin without pressing into the tissue beneath
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <h3 className="font-bold mb-2 text-purple-900">Medium Pressure</h3>
                <p className="text-sm text-purple-800 mb-3">
                  Feel the middle of breast tissue
                </p>
                <div className="text-xs text-purple-700">
                  Press midway into the breast tissue to feel deeper layers
                </div>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg border-2 border-pink-200">
                <h3 className="font-bold mb-2 text-pink-900">Firm Pressure</h3>
                <p className="text-sm text-pink-800 mb-3">
                  Feel the tissue closest to chest and ribs
                </p>
                <div className="text-xs text-pink-700">
                  Press firmly to feel the deepest tissue near the chest wall
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning Signs */}
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="size-6 text-amber-600" />
              <CardTitle className="text-2xl text-amber-900">When to Contact Your Doctor</CardTitle>
            </div>
            <CardDescription className="text-amber-800">
              Contact your healthcare provider if you notice any of these changes:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {warningSign.map((sign, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-200">
                  <AlertCircle className="size-5 flex-shrink-0 mt-0.5 text-amber-600" />
                  <span className="text-sm text-amber-900">{sign}</span>
                </div>
              ))}
            </div>
            <Alert className="mt-6 bg-amber-100 border-amber-300">
              <Info className="h-4 w-4 text-amber-700" />
              <AlertTitle className="text-amber-900">Remember</AlertTitle>
              <AlertDescription className="text-amber-800">
                Most breast changes are not cancer. However, it's important to have any new or concerning 
                changes evaluated by a healthcare professional. Don't wait – early detection saves lives.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
