import { useState, ChangeEvent } from 'react';

interface FAQ {
  question: string;
  answer: string;
  open?: boolean;
}

const faqs: FAQ[] = [
  { question: 'What is Vite?', answer: 'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.' },
  { question: 'How does Tailwind CSS work?', answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.' },
  { question: 'What is TypeScript?', answer: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.' },
  // Add more FAQ items as needed
];

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>(faqs);

  // Function to handle search input
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredFaqs = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm)
    );
    setFilteredFaqs(filteredFaqs);
  };

  // Function to toggle FAQ answer visibility
  const toggleFAQ = (index: number) => {
    const newFaqs = [...filteredFaqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFilteredFaqs(newFaqs);
  };

  // Function to expand all FAQs
  const expandAll = () => {
    const newFaqs = filteredFaqs.map(faq => ({ ...faq, open: true }));
    setFilteredFaqs(newFaqs);
  };

  // Function to collapse all FAQs
  const collapseAll = () => {
    const newFaqs = filteredFaqs.map(faq => ({ ...faq, open: false }));
    setFilteredFaqs(newFaqs);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">FAQ</h1>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search FAQs..."
        className="w-full bg-gray-200 text-gray-900 mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Buttons to expand/collapse all */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={expandAll}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Collapse All
        </button>
      </div>

      {filteredFaqs.map((faq, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
          <div
            className="cursor-pointer bg-gray-100 p-4 hover:bg-gray-200"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-semibold">{faq.question}</h2>
          </div>
          
          {faq.open && (
            <div className="bg-gray-50 p-4 text-gray-700">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
