const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'], forceNER: true });

/* Define your intents and corresponding responses */

// Intents related to Luggage Pickup Service
manager.addDocument('en', 'How do I book a luggage pickup?', 'luggage.pickup');
manager.addDocument('en', 'Tell me about the luggage pickup service', 'luggage.pickup');
manager.addAnswer('en', 'luggage.pickup', 'You can book a luggage pickup through the VacVault app by selecting a convenient time and location.');

// Intents related to the E-Commerce Platform
manager.addDocument('en', 'What is the E-Commerce platform?', 'ecommerce.description');
manager.addDocument('en', 'How can I buy things using VacVault?', 'ecommerce.description');
manager.addAnswer('en', 'ecommerce.description', 'The VacVault E-Commerce Platform allows you to purchase essential items tailored to student needs. You can browse, add items to your cart, and securely check out.');

// Intents related to Data Security
manager.addDocument('en', 'Is my data safe with VacVault?', 'security.privacy');
manager.addDocument('en', 'How does VacVault protect my data?', 'security.privacy');
manager.addAnswer('en', 'security.privacy', 'VacVault prioritizes your data security with encryption protocols and strict privacy policies.');

// Intents related to Accessibility and Inclusivity
manager.addDocument('en', 'How does VacVault ensure accessibility?', 'accessibility.inclusivity');
manager.addDocument('en', 'What accessibility features does VacVault have?', 'accessibility.inclusivity');
manager.addAnswer('en', 'accessibility.inclusivity', 'VacVault adheres to WCAG standards, ensuring accessibility for all students including those with disabilities.');

// Intents related to Sustainability
manager.addDocument('en', 'Tell me about VacVault’s sustainability initiatives', 'sustainability.initiatives');
manager.addDocument('en', 'How is VacVault eco-friendly?', 'sustainability.initiatives');
manager.addAnswer('en', 'sustainability.initiatives', 'VacVault uses eco-friendly packaging and optimizes logistics to reduce carbon footprint.');

// Train the model
(async () => {
    await manager.train();
    manager.save();
    console.log('Chatbot trained successfully.');
})();
