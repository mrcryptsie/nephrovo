import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { ContactFormData } from "@shared/types";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  subject: z.string().min(1, { message: "Veuillez sélectionner un sujet" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: `Une erreur est survenue: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-neutral-600">Des questions sur notre modèle ou besoin d'assistance ? Notre équipe est là pour vous répondre.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)]">
            <h3 className="text-xl font-semibold mb-4">Envoyez-nous un message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sujet</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir un sujet" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="question">Question technique</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="feedback">Retour d'expérience</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Votre message" 
                          className="resize-none" 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full mt-2 shadow-[0_4px_6px_-1px_rgba(67,97,238,0.2),_0_2px_4px_-1px_rgba(67,97,238,0.1)] hover:shadow-lg"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)] mb-6">
              <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <p className="text-neutral-600">+33 (0)1 42 75 45 99</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <p className="text-neutral-600">contact@nephropredict.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium">Adresse</div>
                    <p className="text-neutral-600">15 rue de la Recherche Médicale<br/>75013 Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)]">
              <h3 className="text-xl font-semibold mb-4">Horaires d'assistance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="text-neutral-600">Lundi - Vendredi</div>
                  <div className="font-medium">9h - 18h</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-neutral-600">Samedi</div>
                  <div className="font-medium">9h - 13h</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-neutral-600">Dimanche</div>
                  <div className="font-medium">Fermé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
