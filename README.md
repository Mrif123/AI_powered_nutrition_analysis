# 🍽️ AI-Powered Nutrition Analysis  

This project is an **AI-powered nutrition analyzer** that allows users to upload a meal image through a **Lovable website**. The image is sent to **n8n** via a webhook, processed by an **AI Agent** integrated with the **OpenAI Chat Model (GPT-4.1-mini)**, and analyzed for nutritional content such as **proteins, carbohydrates, fats, and total calories**. The results are then returned to the Lovable site in structured JSON format.  

---

## 🚀 Features  

- 📸 Upload meal images via **Lovable** website.  
- 🔗 **Webhook integration** between Lovable and n8n for seamless data flow.  
- 🤖 AI-powered food analysis using **OpenAI GPT-4.1-mini**.  
- 📊 Extracts key nutrition values:  
  - Protein  
  - Carbohydrates  
  - Fats  
  - Total Calories  
- 📬 Returns structured JSON response back to Lovable.  
- ✅ Displays **success message + calorie count** on the website.  

---

## 🛠️ Tech Stack  

- **Lovable** – Website frontend for user interaction.  
- **n8n** – Workflow automation platform for orchestration.  
- **Webhook Node** – Handles incoming requests from Lovable.  
- **AI Agent (n8n)** – Powered by **OpenAI Chat Model (GPT-4.1-mini)** for food analysis.  
- **Structured Output Parser** – Formats nutritional insights into JSON.  
- **OpenAI API** – Enables intelligent nutrient estimation.  

---

## ⚙️ Workflow Overview  

1. **Image Upload**  
   - User uploads a food image on the Lovable site.  

2. **Webhook Trigger**  
   - The image is sent to the **n8n Webhook node**.  

3. **AI Analysis**  
   - The image is processed by the **AI Agent** using the **OpenAI GPT-4.1-mini model**.  
   - Nutritional values (protein, carbs, fats, calories) are extracted.  

4. **Structured Response**  
   - Results are parsed into a clean **JSON format** by the **Structured Output Parser**.  

5. **Response to Lovable**  
   - The webhook sends the nutrition data + calorie count back to Lovable.  
   - Website displays a **success message with results**.  

---

## 📂 JSON Response Example  

```json
{
  "status": "success",
  "food_item": "Grilled Chicken with Rice",
  "nutrition": {
    "protein": "35g",
    "carbohydrates": "45g",
    "fats": "12g",
    "calories": "420 kcal"
  },
  "message": "Nutrition analysis completed successfully."
}
```

---

## 🔧 Installation & Setup  

### 1. Clone this repository  
```bash
git clone https://github.com/Mrif123/AI_powered_nutrition_analysis.git
cd AI_powered_nutrition_analysis
```

### 2. Setup Lovable  
- Create a Lovable website for image uploads.  
- Configure the image upload form to send requests to your n8n webhook.  

### 3. Setup n8n Workflow  
- Create a new workflow in n8n.  
- Add nodes in the following order:  
  - **Webhook Node** (trigger)  
  - **AI Agent** (OpenAI GPT-4.1-mini model)  
  - **Structured Output Parser**  
  - Return JSON response to webhook.  

### 4. Configure API Keys  
- Add your **OpenAI API key** in n8n credentials.  

### 5. Deploy & Test  
- Start the workflow.  
- Upload a food image via the Lovable site.  
- View results on Lovable UI.  

---

## 🌟 Future Enhancements  

-  Support for multiple food items in a single image.  
-  Nutrition history tracking & daily summary.  
-  Integration with fitness/health apps.  
-  Personalized diet recommendations using AI.  

---

## 🤝 Contributing  

Contributions are welcome! Please fork the repo and submit a pull request.  

---

## 📜 License  

This project is licensed under the MIT License.  
