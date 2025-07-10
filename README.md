![GitHub commit activity](https://img.shields.io/github/commit-activity/t/clusterzx/paperless-ai) ![Docker Pulls](https://img.shields.io/docker/pulls/clusterzx/paperless-ai) ![GitHub User's stars](https://img.shields.io/github/stars/clusterzx) ![GitHub License](https://img.shields.io/github/license/clusterzx/paperless-ai?cacheSeconds=1)

Support this project:<br>
[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/c/clusterzx)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/bech0r)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/clusterzx)
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/clusterzx)

## Discord:
### [https://discord.gg/AvNekAfK38](https://discord.gg/AvNekAfK38)

# Paperless-AI

An automated document analyzer for Paperless-ngx using OpenAI API, Ollama and all OpenAI API compatible Services to automatically analyze and tag your documents. \
It features: Automode, Manual Mode, Ollama and OpenAI, a Chat function to query your documents with AI, a modern and intuitive Webinterface. \
\
**Following Services and OpenAI API compatible services have been successfully tested:**
- Ollama
- OpenAI
- DeepSeek.ai
- OpenRouter.ai
- Perplexity.ai
- Together.ai
- VLLM
- LiteLLM
- Fastchat
- Gemini (Google)
- ... and there are possibly many more

> 🚀 **New Feature Announcement**  
> **Paperless-AI now includes a powerful, integrated RAG-powered Chat interface!**  
> Introducing a whole new way to interact with your Paperless-NGX archive: instead of browsing, filtering, or guessing which tags to search for — just ask.  
> Thanks to Retrieval-Augmented Generation (RAG), you can now search semantically across the full content of your documents and get human-like answers instantly.

> 🔍 **No more guessing. Just ask.**  
> Want to know _“When did I receive my electricity contract?”_, _“How much did I pay for the last car repair?”_ or _“Which documents mention my health insurance?”_ — Paperless-AI will find it for you, even if you don’t remember the exact title, sender, or date.

> 💡 **What does RAG bring to Paperless-NGX?**  
> - True full-text understanding of your documents  
> - Context-aware responses — beyond keyword search  
> - Useful when dealing with large or chaotic document archives  
> - Saves time, avoids frustration, and unlocks insights you may have forgotten you had stored  
> - Blazingly fast answers backed by your own trusted data

![RAG_CHAT_DEMO](https://raw.githubusercontent.com/clusterzx/paperless-ai/refs/heads/main/ppairag.png)

> ⚠️ **Important Note**: If you're installing Paperless-AI for the **first time**, please **restart the container after completing the setup routine** (where you enter your API keys and preferences). This ensures that all services initialize correctly and your RAG index is built properly.  
> ➕ This step is **not required when updating** an existing installation.


![PPAI_SHOWCASE3](https://github.com/user-attachments/assets/1fc9f470-6e45-43e0-a212-b8fa6225e8dd)


## Features

### Automated Document Management
- **Automatic Scanning**: Identifies and processes new documents within Paperless-ngx.
- **AI-Powered Analysis**: Leverages OpenAI API and Ollama (Mistral, Llama, Phi 3, Gemma 2) for precise document analysis.
- **Metadata Assignment**: Automatically assigns titles, tags, document_type and correspondent details.

### Advanced Customization Options
- **Predefined Processing Rules**: Specify which documents to process based on existing tags. *(Optional)* 🆕
- **Selective Tag Assignment**: Use only selected tags for processing. *(Disables the prompt dialog)* 🆕
- **Custom Tagging**: Assign a specific tag (of your choice) to AI-processed documents for easy identification. 🆕

### Manual Mode
- **AI-Assisted Analysis**: Manually analyze documents with AI support in a modern web interface. *(Accessible via the `/manual` endpoint)* 🆕

### Interactive Chat Functionality
- **Document Querying**: Ask questions about your documents and receive accurate, AI-generated answers. 🆕

## Installation

Visit the Wiki for installation:\
[Click here for Installation](https://github.com/clusterzx/paperless-ai/wiki/2.-Installation)
-------------------------------------------


## Docker Support

The application comes with full Docker support:

- Automatic container restart on failure
- Health monitoring
- Volume persistence for database
- Resource management
- Graceful shutdown handling

## Development

To run the application locally without Docker:

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) for the amazing document management system
- OpenAI API
- The Express.js and Node.js communities for their excellent tools

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/clusterzx/paperless-ai/issues) section
2. Create a new issue if yours isn't already listed
3. Provide detailed information about your setup and the problem

## Roadmap (DONE)

- [x] Support for custom AI models
- [x] Support for multiple language analysis
- [x] Advanced tag matching algorithms
- [x] Custom rules for document processing
- [x] Enhanced web interface with statistics

