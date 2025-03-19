import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How is Quality managed?",
    answer:
      "Quality is measured for all elements of interaction—content, adherence to the project plan, communication, etc. In-depth quality review meetings with clients help escalate and resolve issues. Customized TLs are based on satisfaction, quality, productivity, and communication.",
  },
  {
    question: "What about the IP of the work?",
    answer:
      "All IP generated during service execution and delivery belongs to the client. Dazzle provides customized services—i.e., no off-the-shelf reports.",
  },
  {
    question: "What is the Governance and Relationship management structure?",
    answer:
      "A strong governance structure includes weekly status calls, monthly governance calls, and quarterly steering committee calls. Client support and project coordination are handled by experienced Client Executives with clear escalation procedures and assigned responsibilities.",
  },
  {
    question: "How is Confidentiality and security managed?",
    answer:
      "Stringent security measures include physical security, data security, and network security. All employees sign NDAs while joining the company.",
  },
];

const FAQSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <h1
                className="text-3xl md:text-5xl font-heading pb-6 text-center font-bold italic bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text"
            >
                Frequently asked questions
            </h1>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                        {/* Custom Trigger with Plus/Minus */}
                        <AccordionTrigger className="flex justify-between items-center w-full py-4 px-2 text-left">
                            <span className="font-medium text-gray-900">{faq.question}</span>
                           
                        </AccordionTrigger>

                        <AccordionContent className="py-4 px-2 text-gray-600">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>



            {/* <div className="grid md:grid-cols-4 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-secondary-light p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-md font-subheading text-button mb-4">{faq.question}</h2>
            <p className="text-gray-600 font-content">{faq.answer}</p>
          </div>
        ))}
      </div> */}

      <div className="text-center mt-12">
        <h2 className="text-xl font-heading mb-1 text-button font-semibold">Still have questions?</h2>
        <p className="text-gray-600 mb-6 font-content">
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        <button className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-button to-button 
                         hover:from-button hover:to-button transition-all duration-300 
                         text-white px-8 py-1 rounded-full text-lg font-content 
                         before:content-[''] before:absolute before:top-0 before:left-[-75%] 
                         before:w-1/3 before:h-full before:bg-white/20 before:skew-x-[-25deg] 
                         before:transition-all before:duration-500 hover:before:left-[125%]">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQSection;