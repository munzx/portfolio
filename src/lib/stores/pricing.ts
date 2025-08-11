import { writable } from 'svelte/store';

export interface PricingTier {
    name: string;
    range: string;
    timeline: string;
    ideal: string;
    includes: string[];
    popular?: boolean;
}

export interface PricingState {
    selectedTier: PricingTier | null;
    selectedRange: string;
}

// Create the pricing store
export const pricingStore = writable<PricingState>({
    selectedTier: null,
    selectedRange: ''
});

// Helper functions
export const selectPricingTier = (tier: PricingTier) => {
    pricingStore.update(state => ({
        ...state,
        selectedTier: tier,
        selectedRange: tier.range
    }));

    // Scroll to contact form
    setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
};

export const clearSelection = () => {
    pricingStore.update(state => ({
        ...state,
        selectedTier: null,
        selectedRange: ''
    }));
};
