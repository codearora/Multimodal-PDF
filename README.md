
# Multi-Modal PDF Generator

This project is a web application that takes user input, generates multi-modal content using AI APIs, and produces a downloadable PDF. The application leverages React for the frontend, the Hugging Face API for text generation, and the Unsplash API for image generation.

## Features

![Screenshot (12)](https://github.com/codearora/Multimodal-PDF/assets/91114793/5f033344-a883-428c-8780-9ca3164fd309)

![Screenshot (13)](https://github.com/codearora/Multimodal-PDF/assets/91114793/cec11f03-9aa1-4dfe-a03a-df2dd559fd78)

- User-friendly text input form.
- Generates text using Hugging Face's GPT-2 model.
- Fetches relevant images using the Unsplash API.
- Combines text and images into a multi-modal PDF.
- Allows users to download the generated PDF.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- API keys for Hugging Face and Unsplash.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codearora/Multimodal-PDF.git
   cd Multimodal-PDF
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_HUGGING_FACE_API_KEY=your_hugging_face_api_key
   REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

```plaintext
multimodal-pdf-generator/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── TextInput.js
│   ├── TextInput.css
│   ├── PDFGenerator.js
│   ├── index.js
│   ├── index.css
│   └── ...
├── .env
├── package.json
├── README.md
└── ...
```

### Components

- **TextInput.js**: Handles user text input.
- **PDFGenerator.js**: Generates the multi-modal PDF.
- **App.js**: Main component that ties everything together.

## Usage

1. Enter your text into the input field.
2. Click the "Generate PDF" button.
3. Wait for the application to fetch generated text and images.
4. Download the generated PDF by clicking the "Download PDF" button.

## Deployment

To deploy the application, you can use platforms like Vercel or Netlify:

### Vercel

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the application:
   ```bash
   vercel
   ```

3. Follow the prompts to complete the deployment.

### Netlify

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy the application:
   ```bash
   netlify deploy
   ```

3. Follow the prompts to complete the deployment.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Hugging Face](https://huggingface.co/)
- [Unsplash](https://unsplash.com/)
- [@react-pdf/renderer](https://react-pdf.org/)

## Contact

- jaiarora6377@gmail.com
- https://www.linkedin.com/in/jaiarora6377

This `README.md` file provides a comprehensive overview of the project, including installation instructions, usage, project structure, and deployment steps. Make sure to replace placeholders like `your-username`, `your_hugging_face_api_key`, and `your_unsplash_access_key` with the appropriate values.
