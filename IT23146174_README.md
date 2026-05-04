# ITPM Assignment 1: Transliteration Accuracy Testing (Option 1)

This repository contains the automated test scripts and results for **Assignment 1 (Option 1)** of the **IT3040 - Information Technology Project Management (ITPM)** module at the Sri Lanka Institute of Information Technology (SLIIT).

## 📌 Project Overview
The objective of this assignment is to evaluate the transliteration accuracy of the Chat Sinhala function on the PixelSuite platform. The goal is to identify and automate **50 negative test cases** where the system fails to correctly convert informal, chat-style Singlish text into Standard Sinhala.

- **Target Application:** [PixelSuite Chat Translator](https://www.pixelssuite.com/chat-translator)
- **Automation Framework:** Python with [Playwright](https://playwright.dev/python/)
- **Data Management:** OpenPyXL (Excel integration)

## 📁 Repository Structure
📦 ITPM_Assignment_1_IT23146174

 ┣ 📜 IT23146174_Assignment 1 - Test cases.xlsx   # The Excel file containing all 50 negative test cases and automated results.
 
 ┣ 📜 IT23146174_test_automation.py               # The main Playwright Python script for executing the automation.
 
 ┣ 📜 IT23146174_Requirement.txt                  # Required Python dependencies.
 
 ┣ 📜 README.md                                   # Project documentation and setup instructions.
 
 ┗ 📜 [Optional] Other project files              # Any additional configuration files.

## 🛠️ Prerequisites
Before running the automated tests, ensure your system meets the following requirements:
1. **Python:** Version 3.11 or 3.12 is recommended (Python 3.13+ is also supported).
2. **Web Browser:** Google Chrome is recommended.
3. **OS:** Windows / macOS / Linux.

## 🚀 Installation & Setup Guide
Follow these instructions precisely to set up the environment and run the tests.

**Step 1: Clone the repository**
Open your Command Prompt or Terminal and run:

git clone [https://github.com/dinukadk/ITPM_Assignment_1_IT23146174.git](https://github.com/dinukadk/ITPM_Assignment_1_IT23146174.git)

cd ITPM_Assignment_1_IT23146174


**Step 2: Install required dependencies**
It is highly recommended to ensure your pip is up to date before installing the required packages:

python -m pip install -U pip

pip install playwright openpyxl

*(Alternatively, you can install via the text file: pip install -r IT23146174_Requirement.txt)*


**Step 3: Install Playwright Browsers**
Run the following command to download the necessary Chromium browser binaries for Playwright:

playwright install


## ▶️ Running the Automated Tests
Before executing the script, **ensure that the IT23146174_Assignment 1 - Test cases.xlsx file is CLOSED** to prevent permission errors.

Run the following command in your terminal:

python IT23146174_test_automation.py --excel "IT23146174_Assignment 1 - Test cases.xlsx" --url "[https://www.pixelssuite.com/chat-translator](https://www.pixelssuite.com/chat-translator)" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open


### Script Execution Details:
- The script reads the Singlish inputs from the specified Excel file.
- It launches a Chromium browser and automates the typing process on the PixelSuite website.
- The transliterated output is scraped and saved back into the `Actual output` column of the Excel file.
- The `Status` column is automatically updated based on the results.
- The process runs continuously until all valid rows are tested.

## 📊 Test Case Design (Methodology)
The 50 negative test cases were carefully designed to expose weaknesses in the transliteration logic. The selection criteria strictly adhere to the assignment guidelines:
- **Coverage:** Includes at least two test cases for each of the 24 specified Singlish Input Types (e.g., Question forms, Emojis, English Abbreviations, Romanization variants).
- **Length Variation:** Inputs are categorized into Short (S), Medium (M), and Long (L) lengths.
- **Goal:** All 50 scenarios are intended to trigger a **FAIL** status (System Output ≠ Expected Output).

## 👤 Author
- **Name:** Dinuka D. Kirindage
- **Student ID:** IT23146174
- **Module:** IT3040 - ITPM (Year 3, Semester 2)
- **Institution:** Sri Lanka Institute of Information Technology (SLIIT)
