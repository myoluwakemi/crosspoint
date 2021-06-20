import getters from "@/store/onboarding/getters";
import mutations from "@/store/onboarding/mutations";
import profile_image from "@/assets/profile_image.svg"

const state = {
    user: {
        first_name: 'Mobi',
        last_name: 'Okitikpi',
        profile_image
    }
}

export default {
    state,
    getters,
    mutations
}