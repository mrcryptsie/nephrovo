import { PredictionResponse } from "@shared/types";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (element: HTMLElement, prediction: PredictionResponse) => {
  try {
    // Create a new PDF document
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    
    // Add header
    doc.setFillColor(67, 97, 238);
    doc.rect(0, 0, 210, 20, 'F');
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text("NéphroPredict - Rapport de prédiction", 105, 12, { align: "center" });
    
    // Add today's date
    const today = new Date();
    const dateStr = today.toLocaleDateString('fr-FR');
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Date du rapport: ${dateStr}`, 15, 30);
    
    // Add prediction result section
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.text("Résultat de la prédiction", 15, 40);
    doc.setDrawColor(67, 97, 238);
    doc.line(15, 42, 195, 42);
    
    // Add predicted stage
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Stade prédit: ${prediction.predictedStage}`, 15, 52);
    doc.text(`Niveau de confiance: ${Math.round(prediction.confidence * 100)}%`, 15, 60);
    
    // Add stage description and recommendations
    const descriptions = [
      "Fonction rénale normale",
      "IRC légère",
      "IRC légère à modérée",
      "IRC modérée à sévère",
      "IRC sévère",
      "IRC terminale"
    ];

    const stageDescription = descriptions[prediction.predictedStage] || descriptions[0];
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Interprétation clinique", 15, 75);
    doc.setDrawColor(67, 97, 238);
    doc.line(15, 77, 195, 77);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Stade ${prediction.predictedStage}: ${stageDescription}`, 15, 87);
    
    // Add feature importance
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Facteurs contributifs", 15, 110);
    doc.setDrawColor(67, 97, 238);
    doc.line(15, 112, 195, 112);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    let yPos = 122;
    prediction.featureImportance.forEach((feature, i) => {
      if (i < 5) { // Show only top 5 features
        doc.text(`${feature.feature}: ${Math.round(feature.importance * 100)}%`, 15, yPos);
        yPos += 8;
      }
    });
    
    // Add probabilities for all stages
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Probabilités par stade", 15, 170);
    doc.setDrawColor(67, 97, 238);
    doc.line(15, 172, 195, 172);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    yPos = 182;
    prediction.allStagesProbabilities.forEach((item) => {
      doc.text(`Stade ${item.stage}: ${Math.round(item.probability * 100)}%`, 15, yPos);
      yPos += 8;
    });
    
    // Add footer
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 277, 210, 20, 'F');
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Ce rapport est généré automatiquement par NéphroPredict. Les résultats doivent être interprétés", 105, 283, { align: "center" });
    doc.text("par un professionnel de santé qualifié. © NéphroPredict", 105, 288, { align: "center" });
    
    // Save the PDF
    doc.save(`prediction_irc_stade_${prediction.predictedStage}_${dateStr.replace(/\//g, '-')}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
};
