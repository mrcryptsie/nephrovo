import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { PredictionInput } from "@shared/schema";
import { predictionInputSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { PredictionResponse } from "@shared/types";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PredictionResult from "./PredictionResult";

export default function PredictionForm() {
  const [predictionResult, setPredictionResult] = useState<PredictionResponse | null>(null);
  const { toast } = useToast();
  
  const form = useForm<PredictionInput>({
    resolver: zodResolver(predictionInputSchema),
    defaultValues: {
      creatinine: undefined,
      urea: undefined,
      age: undefined,
      sodium: undefined,
      bpSystolic: undefined,
      shock: undefined,
      sex: undefined,
      anemia: undefined,
      glasgow: undefined,
      tobacco: undefined,
      alcohol: undefined,
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: PredictionInput) => {
      const response = await apiRequest("POST", "/api/predict", data);
      return await response.json() as PredictionResponse;
    },
    onSuccess: (data) => {
      setPredictionResult(data);
      toast({
        title: "Prédiction effectuée",
        description: `Le stade de l'IRC prédit est: ${data.predictedStage}`,
      });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: `Une erreur est survenue: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: PredictionInput) => {
    mutation.mutate(data);
  };

  return (
    <section id="prediction" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Prédiction du stade d'IRC</h2>
          <p className="text-neutral-600">Complétez le formulaire ci-dessous avec les données cliniques du patient pour obtenir une prédiction précise.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)] p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="creatinine"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Créatinine (mg/L)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="Saisir la valeur"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || undefined)}
                          />
                        </FormControl>
                        <p className="text-xs text-neutral-500 mt-1">Valeur normale: 5-15 mg/L</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="urea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Urée (g/L)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="Saisir la valeur"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || undefined)}
                          />
                        </FormControl>
                        <p className="text-xs text-neutral-500 mt-1">Valeur normale: 0.15-0.45 g/L</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Âge</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            max="120"
                            placeholder="Saisir l'âge"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sodium"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Na^+ (meq/L)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            min="0"
                            placeholder="Saisir la valeur"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || undefined)}
                          />
                        </FormControl>
                        <p className="text-xs text-neutral-500 mt-1">Valeur normale: 135-145 meq/L</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bpSystolic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TA (mmHg)/Systole</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            max="300"
                            placeholder="Saisir la valeur"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || undefined)}
                          />
                        </FormControl>
                        <p className="text-xs text-neutral-500 mt-1">Valeur normale: 90-140 mmHg</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="shock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Choc de Pointe/Perçu</FormLabel>
                        <Select 
                          onValueChange={(value) => field.onChange(parseInt(value))}
                          value={field.value?.toString()}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner une valeur" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0">Non (0)</SelectItem>
                            <SelectItem value="1">Oui (1)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sexe</FormLabel>
                        <Select
                          onValueChange={(value) => field.onChange(parseInt(value))}
                          value={field.value?.toString()}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner le sexe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0">Femme (0)</SelectItem>
                            <SelectItem value="1">Homme (1)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="anemia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Anémie</FormLabel>
                        <Select
                          onValueChange={(value) => field.onChange(parseInt(value))}
                          value={field.value?.toString()}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner une valeur" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0">Non (0)</SelectItem>
                            <SelectItem value="1">Oui (1)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="glasgow"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Score de Glasgow (/15)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="3"
                            max="15"
                            step="0.01"
                            placeholder="Saisir la valeur"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || undefined)}
                          />
                        </FormControl>
                        <p className="text-xs text-neutral-500 mt-1">Échelle de 3 à 15</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="tobacco"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tabac</FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(parseInt(value))}
                            value={field.value?.toString()}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionner" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0">Non (0)</SelectItem>
                              <SelectItem value="1">Oui (1)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="alcohol"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alcool</FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(parseInt(value))}
                            value={field.value?.toString()}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionner" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0">Non (0)</SelectItem>
                              <SelectItem value="1">Oui (1)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Button 
                  type="submit" 
                  className="shadow-[0_4px_6px_-1px_rgba(67,97,238,0.2),_0_2px_4px_-1px_rgba(67,97,238,0.1)] hover:shadow-lg"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Prédiction en cours..." : "Obtenir la prédiction"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        
        {predictionResult && <PredictionResult prediction={predictionResult} />}
      </div>
    </section>
  );
}
