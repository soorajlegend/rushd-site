import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    companyName: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }),
    city: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
});

export function Customers_info_form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            companyName: "",
            city: "",
            email: "",
            phone: "",
        },
    });
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOB1ZNRaabsXh0QnkLyd0p1iIYBM5ui6MpI2WOGcjRQh1Ors-yhm5oUcCPVwVRQ-lU/exec';
        
        try {
            // Create a FormData object
            const formData = new FormData();
            Object.keys(values).forEach(key => {
                formData.append(key, values[key as keyof typeof values]);
            });

            // Send as no-cors request
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            // Since we can't read the response with no-cors,
            // we'll assume success if no error was thrown
            setSubmitStatus('success');
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 has-box-shadow">
                <div className="flex space-x-4">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. ABC Company" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex space-x-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. example@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 5512121212121" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            <span className="flex items-center">
                                <i className='bx bxs-rocket pr-2'></i>
                                Submit
                            </span>
                        )}
                    </Button>
                    
                    {submitStatus === 'success' && (
                        <p className="text-green-600 text-sm text-center">
                            Form submitted successfully!
                        </p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-600 text-sm text-center">
                            An error occurred. Please try again.
                        </p>
                    )}
                </div>
            </form>
        </Form>
    );
}
