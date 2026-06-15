import { useState } from "react";
import { Button } from "../components/ui/button";
import { Upload, AlertTriangle, ImageIcon, X, CheckCircle, Info } from "lucide-react";

type ImageType = "mammography" | "thermography" | "ultrasound";

interface UploadedImage {
  type: ImageType;
  file: File;
  preview: string;
  analyzed: boolean;
  result?: {
    riskLevel: "low" | "moderate" | "high";
    confidence: number;
    findings: string[];
    recommendation: string;
  };
}

export default function ImageAnalysis() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [analyzing, setAnalyzing] = useState(false);

  const handleFileUpload = (type: ImageType, files: FileList | null) => {
    if (!files) return;

    const newImages: UploadedImage[] = Array.from(files).map((file) => ({
      type,
      file,
      preview: URL.createObjectURL(file),
      analyzed: false,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const analyzeImages = async () => {
    setAnalyzing(true);

    // Simulate AI analysis with delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setImages((prev) =>
      prev.map((img) => {
        if (img.analyzed) return img;

        // Mock analysis results
        const riskLevels: Array<"low" | "moderate" | "high"> = ["low", "moderate", "high"];
        const randomRisk = riskLevels[Math.floor(Math.random() * riskLevels.length)];

        const findings: Record<ImageType, string[]> = {
          mammography: [
            "No suspicious masses detected",
            "Breast tissue density: Heterogeneously dense",
            "Bilateral symmetry observed",
          ],
          thermography: [
            "Temperature distribution within normal range",
            "No significant thermal asymmetry",
            "Vascular patterns consistent with baseline",
          ],
          ultrasound: [
            "No solid masses identified",
            "Normal glandular tissue architecture",
            "No abnormal fluid collections",
          ],
        };

        return {
          ...img,
          analyzed: true,
          result: {
            riskLevel: randomRisk,
            confidence: Math.random() * 30 + 70, // 70-100%
            findings: findings[img.type],
            recommendation:
              randomRisk === "high"
                ? "URGENT: Consult with oncologist immediately for further evaluation"
                : randomRisk === "moderate"
                ? "Schedule follow-up with healthcare provider within 2 weeks"
                : "Continue regular screening schedule as recommended",
          },
        };
      })
    );

    setAnalyzing(false);
  };

  const getRiskColor = (level?: "low" | "moderate" | "high") => {
    switch (level) {
      case "low":
        return "text-green-600 bg-green-50 border-green-200";
      case "moderate":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getTypeLabel = (type: ImageType) => {
    switch (type) {
      case "mammography":
        return "Mammography";
      case "thermography":
        return "Thermography";
      case "ultrasound":
        return "Ultrasound";
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Diagnosis</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload mammography, thermography, or ultrasound images for educational
            demonstration of image analysis workflow. Remember: this is NOT a diagnostic tool.
          </p>
        </div>

        {/* Upload Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {(["mammography", "thermography", "ultrasound"] as ImageType[]).map((type) => (
            <div key={type} className="bg-white rounded-lg border border-pink-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ImageIcon className="size-5 text-pink-600" />
                <h3 className="font-semibold capitalize">{getTypeLabel(type)}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Upload {type} images in DICOM, JPEG, or PNG format
              </p>
              <label className="block">
                <input
                  type="file"
                  accept="image/*,.dcm"
                  multiple
                  className="hidden"
                  onChange={(e) => handleFileUpload(type, e.target.files)}
                />
                <Button variant="outline" className="w-full" asChild>
                  <span className="cursor-pointer flex items-center justify-center gap-2">
                    <Upload className="size-4" />
                    Select Images
                  </span>
                </Button>
              </label>
              <div className="mt-3 text-xs text-gray-500">
                {images.filter((img) => img.type === type).length} image(s) uploaded
              </div>
            </div>
          ))}
        </div>

        {/* Uploaded Images Grid */}
        {images.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="font-semibold mb-4">Uploaded Images ({images.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <img
                      src={img.preview}
                      alt={`${img.type} scan`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="size-4" />
                    </button>
                    {img.analyzed && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white rounded-full p-1">
                        <CheckCircle className="size-4" />
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="text-sm font-medium capitalize mb-1">
                      {getTypeLabel(img.type)}
                    </div>
                    <div className="text-xs text-gray-500 truncate">{img.file.name}</div>
                    {img.analyzed && img.result && (
                      <div
                        className={`mt-2 px-2 py-1 rounded text-xs font-medium border ${getRiskColor(
                          img.result.riskLevel
                        )}`}
                      >
                        Risk: {img.result.riskLevel.toUpperCase()} (
                        {img.result.confidence.toFixed(1)}%)
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Analyze Button */}
            <Button
              onClick={analyzeImages}
              disabled={analyzing || images.every((img) => img.analyzed)}
              className="w-full bg-pink-600 hover:bg-pink-700"
            >
              {analyzing ? (
                <>
                  <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Analyzing Images...
                </>
              ) : images.every((img) => img.analyzed) ? (
                "All Images Analyzed"
              ) : (
                "Analyze Images (Demo)"
              )}
            </Button>
          </div>
        )}

        {/* Analysis Results */}
        {images.some((img) => img.analyzed) && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="size-5 text-blue-600" />
              <h2 className="font-semibold">Analysis Results (Simulated)</h2>
            </div>

            {images
              .filter((img) => img.analyzed && img.result)
              .map((img, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-lg p-6 ${getRiskColor(img.result?.riskLevel)}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold mb-1 capitalize">
                        {getTypeLabel(img.type)} Analysis
                      </h3>
                      <p className="text-xs opacity-75 truncate max-w-md">{img.file.name}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold uppercase text-sm">
                        {img.result?.riskLevel} Risk
                      </div>
                      <div className="text-xs opacity-75">
                        Confidence: {img.result?.confidence.toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Findings:</h4>
                    <ul className="space-y-1">
                      {img.result?.findings.map((finding, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="opacity-50">•</span>
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/50 rounded p-3 border">
                    <h4 className="font-medium text-sm mb-1">Recommendation:</h4>
                    <p className="text-sm">{img.result?.recommendation}</p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Info Section */}
        {images.length === 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="font-semibold text-blue-900 mb-3">
              How This Demo Works (Educational Only)
            </h3>
            <ol className="space-y-2 text-sm text-blue-800">
              <li className="flex gap-2">
                <span className="font-semibold">1.</span>
                <span>
                  Upload sample images using the three sections above (mammography,
                  thermography, or ultrasound)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">2.</span>
                <span>
                  Click "Analyze Images" to simulate the analysis process (results are
                  randomly generated)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">3.</span>
                <span>
                  View the mock results to understand how medical AI analysis interfaces work
                </span>
              </li>
            </ol>
            <div className="mt-4 pt-4 border-t border-blue-300">
              <p className="text-sm text-blue-900 font-medium">
                To build a real diagnostic tool, you would need:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-blue-800">
                <li>• Trained medical AI models (requires thousands of annotated images)</li>
                <li>• FDA clearance for diagnostic medical devices</li>
                <li>• Board-certified radiologist oversight</li>
                <li>• HIPAA-compliant infrastructure</li>
                <li>• Integration with medical imaging standards (DICOM)</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
