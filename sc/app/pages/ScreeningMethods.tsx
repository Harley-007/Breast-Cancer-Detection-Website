import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Scan, 
  Radio, 
  Waves, 
  Microscope, 
  Calendar, 
  Clock, 
  Info,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function ScreeningMethods() {
  const screeningMethods = [
    {
      name: "Mammography",
      icon: Scan,
      description: "X-ray imaging of the breast",
      type: "Primary Screening",
      bestFor: "Women 40 and older, standard screening",
      howItWorks: "Uses low-dose X-rays to create detailed images of breast tissue. Can detect tumors too small to feel and find ductal carcinoma in situ (DCIS).",
      frequency: "Annually for women 40+, or as recommended by doctor",
      accuracy: "85-90% sensitivity in detecting breast cancer",
      pros: [
        "Proven to reduce breast cancer mortality",
        "Can detect cancer before symptoms appear",
        "Widely available and covered by insurance",
        "Quick procedure (about 20 minutes)"
      ],
      cons: [
        "Involves radiation exposure (minimal)",
        "May be uncomfortable during compression",
        "Less effective for dense breast tissue",
        "May result in false positives requiring additional testing"
      ]
    },
    {
      name: "Breast Ultrasound",
      icon: Waves,
      description: "Sound wave imaging",
      type: "Supplemental Screening",
      bestFor: "Dense breast tissue, younger women, evaluating lumps",
      howItWorks: "Uses high-frequency sound waves to create images of breast tissue. Often used as a follow-up to mammography or to examine specific areas of concern.",
      frequency: "As needed, based on mammogram results or symptoms",
      accuracy: "Can detect additional cancers missed by mammography in dense breasts",
      pros: [
        "No radiation exposure",
        "Painless and non-invasive",
        "Good for distinguishing fluid-filled cysts from solid masses",
        "Helpful for dense breast tissue",
        "Can guide biopsies"
      ],
      cons: [
        "Not recommended as primary screening tool",
        "Operator-dependent quality",
        "May miss some cancers that mammography detects",
        "Can lead to more biopsies of benign findings"
      ]
    },
    {
      name: "Breast MRI",
      icon: Radio,
      description: "Magnetic resonance imaging",
      type: "High-Risk Screening",
      bestFor: "High-risk individuals, BRCA mutation carriers",
      howItWorks: "Uses powerful magnets and radio waves to create detailed images of breast tissue. Most sensitive imaging method for breast cancer detection.",
      frequency: "Annually for high-risk women, often alternating with mammography",
      accuracy: "90-95% sensitivity, highest among screening methods",
      pros: [
        "Most sensitive screening method",
        "No radiation exposure",
        "Excellent for high-risk women",
        "Can detect cancer missed by other methods",
        "Good for dense breast tissue"
      ],
      cons: [
        "Expensive and not always covered by insurance",
        "Higher false positive rate",
        "Requires contrast injection",
        "Not suitable for everyone (pacemakers, etc.)",
        "Time-consuming (30-60 minutes)"
      ]
    },
    {
      name: "Clinical Breast Exam",
      icon: Microscope,
      description: "Physical examination by healthcare provider",
      type: "Routine Check",
      bestFor: "All women as part of regular checkups",
      howItWorks: "A healthcare provider manually examines your breasts and underarm areas for lumps or other changes. Often performed during annual physical exams.",
      frequency: "Every 1-3 years for women 20-39, annually for 40+",
      accuracy: "Limited as standalone screening, but valuable when combined with imaging",
      pros: [
        "No special equipment needed",
        "Can detect palpable lumps",
        "Opportunity to discuss concerns",
        "Usually part of routine care"
      ],
      cons: [
        "Cannot detect small or deep tumors",
        "Depends on examiner's skill and experience",
        "Not sufficient as sole screening method",
        "May miss early-stage cancers"
      ]
    }
  ];

  const guidelines = [
    {
      ageGroup: "Ages 20-39",
      recommendations: [
        "Be aware of how your breasts normally look and feel",
        "Report any changes to your healthcare provider",
        "Clinical breast exam every 1-3 years",
        "Consider earlier screening if high-risk"
      ]
    },
    {
      ageGroup: "Ages 40-44",
      recommendations: [
        "Option to begin annual mammogram screening",
        "Discuss individual risk factors with doctor",
        "Continue breast self-awareness",
        "Annual clinical breast exam"
      ]
    },
    {
      ageGroup: "Ages 45-54",
      recommendations: [
        "Annual mammogram screening recommended",
        "More frequent screening if dense breasts or high-risk",
        "Continue monthly self-examinations",
        "Annual clinical breast exam"
      ]
    },
    {
      ageGroup: "Ages 55+",
      recommendations: [
        "Mammogram every 1-2 years, or continue annually",
        "Continue screening as long as in good health",
        "Discuss frequency with healthcare provider",
        "Remain vigilant about any changes"
      ]
    },
    {
      ageGroup: "High-Risk",
      recommendations: [
        "Begin screening earlier (often age 30)",
        "Annual mammogram + MRI recommended",
        "Consider genetic counseling and testing",
        "More frequent monitoring and exams",
        "Discuss risk reduction strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
            <Scan className="size-4" />
            <span className="text-sm font-medium">Screening Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Breast Cancer Screening Methods</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding different screening options and finding the right approach for you
          </p>
        </div>

        <Alert className="mb-8 bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-900">Why Screening Matters</AlertTitle>
          <AlertDescription className="text-blue-800">
            Regular screening can detect breast cancer early, before symptoms appear. When found early, 
            breast cancer is easier to treat and has a 99% 5-year survival rate. Talk to your doctor 
            about which screening methods and schedule are right for you.
          </AlertDescription>
        </Alert>

        {/* Screening Methods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Screening Methods</h2>
          <Tabs defaultValue="mammography" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="mammography">Mammography</TabsTrigger>
              <TabsTrigger value="ultrasound">Ultrasound</TabsTrigger>
              <TabsTrigger value="mri">MRI</TabsTrigger>
              <TabsTrigger value="clinical">Clinical Exam</TabsTrigger>
            </TabsList>

            {screeningMethods.map((method) => (
              <TabsContent key={method.name.toLowerCase().replace(' ', '')} value={method.name.toLowerCase().replace(' ', '')}>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-pink-100 rounded-lg">
                              <method.icon className="size-6 text-pink-600" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{method.name}</CardTitle>
                              <CardDescription className="text-base">{method.description}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="secondary">{method.type}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-bold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-green-600" />
                            Best For
                          </h3>
                          <p className="text-gray-700">{method.bestFor}</p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2">How It Works</h3>
                          <p className="text-gray-700">{method.howItWorks}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                              <Calendar className="size-4 text-blue-600" />
                              Frequency
                            </h3>
                            <p className="text-sm text-gray-700">{method.frequency}</p>
                          </div>
                          <div>
                            <h3 className="font-bold mb-2 flex items-center gap-2">
                              <Clock className="size-4 text-purple-600" />
                              Accuracy
                            </h3>
                            <p className="text-sm text-gray-700">{method.accuracy}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-green-50 border-green-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-900">Advantages</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {method.pros.map((pro, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-green-900">
                                <CheckCircle2 className="size-4 flex-shrink-0 mt-0.5 text-green-600" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-orange-50 border-orange-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-orange-900">Limitations</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {method.cons.map((con, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-orange-900">
                                <AlertCircle className="size-4 flex-shrink-0 mt-0.5 text-orange-600" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <Card className="sticky top-24">
                      <CardHeader>
                        <CardTitle>Quick Facts</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1579154341058-50b75faf8e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW1tb2dyYW0lMjBtZWRpY2FsJTIwc2NyZWVuaW5nfGVufDF8fHx8MTc4MDAwNTY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Medical screening equipment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="p-3 bg-pink-50 rounded-lg">
                            <div className="font-bold text-pink-900 mb-1">Type</div>
                            <div className="text-pink-700">{method.type}</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-bold text-blue-900 mb-1">Recommended For</div>
                            <div className="text-blue-700">{method.bestFor}</div>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="font-bold text-purple-900 mb-1">How Often</div>
                            <div className="text-purple-700">{method.frequency}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Screening Guidelines */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Screening Guidelines by Age</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline, index) => (
              <Card key={index} className="border-2 hover:border-pink-200 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="size-5 text-pink-600" />
                    {guideline.ageGroup}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guideline.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="size-4 flex-shrink-0 mt-0.5 text-pink-600" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <Card className="bg-gradient-to-br from-pink-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl">What to Expect During Screening</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                  Before
                </h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Schedule when breasts are least tender</li>
                  <li>• Don't wear deodorant or lotion</li>
                  <li>• Bring previous mammograms</li>
                  <li>• Wear two-piece clothing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                  During
                </h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Procedure takes 10-20 minutes</li>
                  <li>• Breast compression may be uncomfortable</li>
                  <li>• Remain still during imaging</li>
                  <li>• Both breasts are imaged</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                  After
                </h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Results typically in 1-2 weeks</li>
                  <li>• Additional imaging may be needed</li>
                  <li>• Most callbacks are not cancer</li>
                  <li>• Keep copies of your results</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
