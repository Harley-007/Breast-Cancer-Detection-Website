import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Info, AlertTriangle, Users, TrendingUp, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function AboutBreastCancer() {
  const riskFactors = [
    {
      title: "Age",
      description: "Risk increases with age, especially after 50",
      level: "High Impact"
    },
    {
      title: "Family History",
      description: "Having close relatives with breast cancer increases risk",
      level: "High Impact"
    },
    {
      title: "Genetic Mutations",
      description: "BRCA1 and BRCA2 gene mutations significantly increase risk",
      level: "High Impact"
    },
    {
      title: "Personal History",
      description: "Previous breast cancer or certain benign breast conditions",
      level: "High Impact"
    },
    {
      title: "Radiation Exposure",
      description: "Previous chest radiation therapy, especially before age 30",
      level: "Moderate Impact"
    },
    {
      title: "Reproductive History",
      description: "Early menstruation, late menopause, no pregnancies",
      level: "Moderate Impact"
    },
    {
      title: "Hormone Therapy",
      description: "Long-term hormone replacement therapy",
      level: "Moderate Impact"
    },
    {
      title: "Lifestyle Factors",
      description: "Obesity, alcohol consumption, physical inactivity",
      level: "Moderate Impact"
    }
  ];

  const types = [
    {
      name: "Ductal Carcinoma In Situ (DCIS)",
      description: "Non-invasive cancer where abnormal cells are found in the lining of breast ducts. Considered Stage 0, highly treatable.",
      invasive: false
    },
    {
      name: "Invasive Ductal Carcinoma (IDC)",
      description: "The most common type, accounting for about 80% of breast cancers. Starts in milk ducts and invades surrounding tissue.",
      invasive: true
    },
    {
      name: "Invasive Lobular Carcinoma (ILC)",
      description: "Starts in milk-producing lobules and can spread. Accounts for about 10% of invasive breast cancers.",
      invasive: true
    },
    {
      name: "Triple-Negative Breast Cancer",
      description: "Aggressive type that tests negative for estrogen receptors, progesterone receptors, and HER2. Requires specialized treatment.",
      invasive: true
    },
    {
      name: "Inflammatory Breast Cancer",
      description: "Rare and aggressive type that causes breast to appear red and swollen. Requires immediate treatment.",
      invasive: true
    },
    {
      name: "Paget Disease of the Breast",
      description: "Rare cancer affecting the nipple and areola, often associated with underlying DCIS or invasive cancer.",
      invasive: false
    }
  ];

  const symptoms = [
    "New lump or mass in the breast or underarm",
    "Swelling of all or part of the breast",
    "Skin dimpling or puckering",
    "Breast or nipple pain",
    "Nipple retraction (turning inward)",
    "Nipple or breast skin that is red, dry, flaking, or thickened",
    "Nipple discharge (other than breast milk)",
    "Change in size or shape of the breast"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 rounded-full px-4 py-2 mb-4">
            <Info className="size-4" />
            <span className="text-sm font-medium">Educational Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Breast Cancer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding breast cancer is the first step toward prevention and early detection
          </p>
        </div>

        {/* What is Breast Cancer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What is Breast Cancer?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Breast cancer is a disease in which cells in the breast tissue grow out of control. 
              There are different types of breast cancer, and the type is determined by which cells 
              in the breast turn into cancer.
            </p>
            <p>
              Breast cancer can begin in different parts of the breast. The breast is made up of 
              three main parts: lobules (glands that produce milk), ducts (tubes that carry milk 
              to the nipple), and connective tissue (fibrous and fatty tissue that surrounds everything).
            </p>
            <Alert className="bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-900">Important to Know</AlertTitle>
              <AlertDescription className="text-blue-800">
                Most breast cancers begin in the ducts or lobules. Breast cancer can spread outside 
                the breast through blood vessels and lymph vessels. When breast cancer spreads to 
                other parts of the body, it is said to have metastasized.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="size-8 mx-auto mb-2 text-pink-600" />
              <div className="text-2xl font-bold">1 in 8</div>
              <div className="text-sm text-gray-600">Women affected</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Heart className="size-8 mx-auto mb-2 text-pink-600" />
              <div className="text-2xl font-bold">287,000</div>
              <div className="text-sm text-gray-600">New cases yearly (US)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <TrendingUp className="size-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm text-gray-600">Survival when caught early</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <AlertTriangle className="size-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold">1%</div>
              <div className="text-sm text-gray-600">Male breast cancer cases</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="types" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
            <TabsTrigger value="risks">Risk Factors</TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Types of Breast Cancer</CardTitle>
                <CardDescription>
                  Understanding the different types helps determine the best treatment approach
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {types.map((type, index) => (
                    <div key={index} className="border-l-4 border-pink-500 pl-4 py-2">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold">{type.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          type.invasive 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {type.invasive ? 'Invasive' : 'Non-Invasive'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="symptoms" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Warning Signs and Symptoms</CardTitle>
                <CardDescription>
                  Be aware of these changes in your breasts and consult a doctor if you notice them
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6 bg-amber-50 border-amber-200">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-900">Important Note</AlertTitle>
                  <AlertDescription className="text-amber-800">
                    Having one or more of these symptoms doesn't necessarily mean you have breast cancer. 
                    Many of these symptoms can be caused by other, non-cancerous conditions. However, 
                    it's important to have any breast changes checked by a healthcare provider.
                  </AlertDescription>
                </Alert>
                <div className="grid md:grid-cols-2 gap-4">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm">{symptom}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Remember:</strong> Most breast lumps are not cancerous. However, any new lump 
                    or change should be evaluated by a healthcare professional as soon as possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risks" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Risk Factors</CardTitle>
                <CardDescription>
                  Factors that may increase the risk of developing breast cancer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6 bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="text-blue-900">Understanding Risk</AlertTitle>
                  <AlertDescription className="text-blue-800">
                    Having a risk factor doesn't mean you will develop breast cancer. Many women with 
                    risk factors never develop the disease, while some with no known risk factors do. 
                    Understanding your risk helps you make informed decisions about screening and prevention.
                  </AlertDescription>
                </Alert>
                <div className="grid md:grid-cols-2 gap-4">
                  {riskFactors.map((factor, index) => (
                    <div key={index} className="p-4 border-2 rounded-lg hover:border-pink-200 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">{factor.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          factor.level === 'High Impact' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {factor.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{factor.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can men get breast cancer?</AccordionTrigger>
                <AccordionContent>
                  Yes, although it's much less common. About 1% of all breast cancer cases occur in men. 
                  Male breast cancer is most common in older men, though it can occur at any age. Men 
                  should also be aware of any changes in their breast tissue and seek medical attention 
                  if they notice lumps or other changes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is breast cancer hereditary?</AccordionTrigger>
                <AccordionContent>
                  About 5-10% of breast cancers are thought to be hereditary, caused by abnormal genes 
                  passed from parent to child. The most common cause of hereditary breast cancer is an 
                  inherited mutation in the BRCA1 or BRCA2 genes. If you have a strong family history 
                  of breast or ovarian cancer, you may want to consider genetic counseling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does wearing a bra cause breast cancer?</AccordionTrigger>
                <AccordionContent>
                  No. There is no scientific evidence that wearing bras, including underwire bras, causes 
                  breast cancer. This myth has been debunked by multiple scientific studies. Breast cancer 
                  risk is not increased by the type of bra you wear or how long you wear it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can breast cancer be prevented?</AccordionTrigger>
                <AccordionContent>
                  While there's no sure way to prevent breast cancer, you can take steps to lower your risk. 
                  These include maintaining a healthy weight, staying physically active, limiting alcohol 
                  consumption, breastfeeding if possible, and being aware of the risks of hormone therapy. 
                  Regular screening doesn't prevent cancer but helps detect it early when it's most treatable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is the survival rate for breast cancer?</AccordionTrigger>
                <AccordionContent>
                  Breast cancer survival rates vary depending on the stage at diagnosis. When detected at 
                  an early, localized stage, the 5-year survival rate is 99%. For regional spread, it's 86%, 
                  and for distant metastasis, it's 31%. Overall, the 5-year survival rate for breast cancer 
                  is 91%. This emphasizes the critical importance of early detection through regular screening.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
