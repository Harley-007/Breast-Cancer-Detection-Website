import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Heart, 
  Phone, 
  MessageCircle, 
  Users, 
  BookOpen, 
  ExternalLink,
  Mail,
  Building,
  HelpCircle,
  Stethoscope,
  DollarSign,
  Info
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function Resources() {
  const organizations = [
    {
      name: "American Cancer Society",
      description: "Comprehensive information about breast cancer, treatment options, and support services.",
      phone: "1-800-227-2345",
      website: "cancer.org",
      services: ["24/7 Helpline", "Support Groups", "Educational Resources", "Financial Assistance"]
    },
    {
      name: "Susan G. Komen",
      description: "Leading breast cancer organization providing research funding, education, and patient support.",
      phone: "1-877-465-6636",
      website: "komen.org",
      services: ["Breast Care Helpline", "Treatment Assistance", "Community Programs", "Research Funding"]
    },
    {
      name: "National Breast Cancer Foundation",
      description: "Provides education, support, and access to early detection services.",
      phone: "1-972-248-9200",
      website: "nationalbreastcancer.org",
      services: ["Free Mammograms", "Patient Navigator", "Support Services", "Educational Materials"]
    },
    {
      name: "Breastcancer.org",
      description: "Nonprofit organization offering comprehensive, evidence-based information about breast cancer.",
      website: "breastcancer.org",
      services: ["Expert Information", "Community Forums", "Treatment Guides", "Research Updates"]
    },
    {
      name: "Living Beyond Breast Cancer",
      description: "Provides programs and services for those affected by breast cancer.",
      phone: "1-855-807-6386",
      website: "lbbc.org",
      services: ["Educational Programs", "Support Services", "Young Women's Program", "Metastatic Program"]
    },
    {
      name: "FORCE (Facing Our Risk)",
      description: "Support and information for individuals with hereditary breast and ovarian cancer.",
      phone: "1-866-288-7475",
      website: "facingourrisk.org",
      services: ["Genetic Counseling Info", "Peer Support", "Risk Management", "Research Advocacy"]
    }
  ];

  const supportTypes = [
    {
      icon: Users,
      title: "Support Groups",
      description: "Connect with others who understand your journey",
      resources: [
        "In-person support groups through local hospitals and cancer centers",
        "Online support communities and forums",
        "Survivor mentorship programs",
        "Family and caregiver support groups"
      ]
    },
    {
      icon: MessageCircle,
      title: "Counseling & Mental Health",
      description: "Professional support for emotional well-being",
      resources: [
        "Individual therapy with cancer-specialized therapists",
        "Couples and family counseling",
        "Art and music therapy programs",
        "Mindfulness and meditation resources"
      ]
    },
    {
      icon: DollarSign,
      title: "Financial Assistance",
      description: "Help with treatment costs and related expenses",
      resources: [
        "Co-pay assistance programs",
        "Transportation assistance",
        "Lodging support for treatment travel",
        "Prescription assistance programs"
      ]
    },
    {
      icon: Stethoscope,
      title: "Medical Resources",
      description: "Finding the right care and second opinions",
      resources: [
        "NCI-designated cancer centers directory",
        "Second opinion services",
        "Clinical trial matching",
        "Patient navigator services"
      ]
    }
  ];

  const hotlines = [
    {
      name: "National Cancer Institute",
      number: "1-800-422-6237",
      hours: "Monday-Friday, 9am-9pm EST",
      description: "Cancer information and resources"
    },
    {
      name: "American Cancer Society",
      number: "1-800-227-2345",
      hours: "24/7",
      description: "Support and information anytime"
    },
    {
      name: "Cancer Care Helpline",
      number: "1-800-813-4673",
      hours: "Monday-Friday, 9am-9pm EST",
      description: "Free professional support services"
    },
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      hours: "24/7",
      description: "Crisis support and mental health resources"
    }
  ];

  const onlineResources = [
    {
      category: "Education & Information",
      resources: [
        { name: "National Cancer Institute", url: "cancer.gov/types/breast", icon: BookOpen },
        { name: "CDC Breast Cancer Information", url: "cdc.gov/cancer/breast", icon: Info },
        { name: "Mayo Clinic Breast Cancer Guide", url: "mayoclinic.org", icon: Stethoscope }
      ]
    },
    {
      category: "Online Communities",
      resources: [
        { name: "Breastcancer.org Community", url: "community.breastcancer.org", icon: Users },
        { name: "Cancer Support Community", url: "cancersupportcommunity.org", icon: Heart },
        { name: "Inspire Breast Cancer Support", url: "inspire.com/groups/breast-cancer", icon: MessageCircle }
      ]
    },
    {
      category: "Finding Care",
      resources: [
        { name: "NCI Cancer Centers", url: "cancer.gov/research/infrastructure/cancer-centers", icon: Building },
        { name: "Clinical Trials Database", url: "clinicaltrials.gov", icon: Stethoscope },
        { name: "ASCO Cancer.Net", url: "cancer.net", icon: Info }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-4 py-2 mb-4">
            <Heart className="size-4" />
            <span className="text-sm font-medium">Support & Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're not alone. Find organizations, support groups, and resources to help you through your journey
          </p>
        </div>

        {/* Emergency Notice */}
        <Alert className="mb-8 bg-red-50 border-red-200">
          <Phone className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-900">Emergency Support</AlertTitle>
          <AlertDescription className="text-red-800">
            If you're experiencing a medical emergency, call 911 immediately. For emotional crisis support, 
            call or text 988 (Suicide & Crisis Lifeline) available 24/7.
          </AlertDescription>
        </Alert>

        {/* Hero Section with Image */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Find Support Near You</h2>
              <p className="text-gray-600 mb-6">
                Whether you're newly diagnosed, in treatment, a survivor, or supporting a loved one, 
                there are resources available to help. Don't hesitate to reach out – support is available 
                and you deserve it.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-green-600" />
                  <span>Free support services available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-green-600" />
                  <span>24/7 helplines for immediate assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-green-600" />
                  <span>Online and in-person support options</span>
                </div>
              </div>
            </div>
            <div className="aspect-square md:aspect-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707409066859-a90674383d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc3VwcG9ydCUyMGdyb3VwJTIwd29tZW58ZW58MXx8fHwxNzgwMDA1NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare support group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>

        {/* Helplines */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">24/7 Helplines</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {hotlines.map((hotline, index) => (
              <Card key={index} className="border-2 hover:border-pink-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Phone className="size-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{hotline.name}</h3>
                      <div className="text-2xl font-bold text-pink-600 mb-1">{hotline.number}</div>
                      <div className="text-sm text-gray-600 mb-1">{hotline.hours}</div>
                      <p className="text-sm text-gray-700">{hotline.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Major Organizations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Major Organizations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="size-5 text-pink-600" />
                    {org.name}
                  </CardTitle>
                  <CardDescription>{org.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3 mb-4">
                    {org.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="size-4 text-gray-600" />
                        <a href={`tel:${org.phone}`} className="hover:text-pink-600">
                          {org.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <ExternalLink className="size-4 text-gray-600" />
                      <span className="text-pink-600">{org.website}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="text-sm font-medium mb-2">Services:</div>
                      <div className="flex flex-wrap gap-1">
                        {org.services.map((service, idx) => (
                          <span key={idx} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Support Available</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {supportTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <type.icon className="size-6 text-pink-600" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.resources.map((resource, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="size-4 flex-shrink-0 mt-0.5 text-pink-600" />
                        <span>{resource}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Online Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Online Resources</h2>
          <Tabs defaultValue="education" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="care">Finding Care</TabsTrigger>
            </TabsList>

            {onlineResources.map((category, catIndex) => (
              <TabsContent 
                key={catIndex} 
                value={category.category.toLowerCase().split(' ')[0]}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.resources.map((resource, resIndex) => (
                        <div key={resIndex} className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-pink-200 transition-colors">
                          <div className="flex items-center gap-3">
                            <resource.icon className="size-5 text-pink-600" />
                            <div>
                              <div className="font-medium">{resource.name}</div>
                              <div className="text-sm text-gray-600">{resource.url}</div>
                            </div>
                          </div>
                          <ExternalLink className="size-5 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Additional Resources */}
        <Card className="bg-gradient-to-br from-pink-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl">Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="size-5 text-pink-600" />
                  Educational Materials
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Free brochures and fact sheets</li>
                  <li>• Treatment decision guides</li>
                  <li>• Nutrition and wellness information</li>
                  <li>• Clinical trial information</li>
                  <li>• Survivorship resources</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Heart className="size-5 text-pink-600" />
                  Practical Support
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Wig and prosthesis programs</li>
                  <li>• Meal delivery services</li>
                  <li>• House cleaning assistance</li>
                  <li>• Childcare support</li>
                  <li>• Legal and employment assistance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
