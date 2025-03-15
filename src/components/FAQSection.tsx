import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <Accordion 
      type="single" 
      collapsible 
      className="space-y-4"
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <AccordionItem 
            value={`item-${index}`}
            className="border border-border/50 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 data-[state=open]:bg-primary/5 transition-all">
              <span className="text-left font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
} 