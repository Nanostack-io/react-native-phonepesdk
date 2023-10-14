import { addons } from "react-native";
import images from "./images";


const banners = [
    {
        image: images.banner1
    },
    {
        image: images.banner2
    }
]

const slider2 = [
    {
        image: images.p1
    },
    {
        image: images.p2
    },
    {
        image: images.p3
    },
    {
        image: images.p1
    }
]

const ourGymBanners = [
    {
        image: images.ourGym1
    },
    {
        image: images.ourGym2
    }
]

const workoutCategory = [
    {
        image: images.cateImg1
    },
    {
        image: images.cateImg2
    },
    {
        image: images.cateImg1
    },
    {
        image: images.cateImg2
    }
]

const foodList = [
    {
        image: images.food,
        title: "Veggie tomato mix",
        subTitle: "1 Medium size",
        time: "6:00 AM"
    },
    {
        image: images.food,
        title: "Veggie tomato mix",
        subTitle: "1 Medium size",
        time: "6:00 AM"
    },
    {
        image: images.food,
        title: "Veggie tomato mix",
        subTitle: "1 Medium size",
        time: "6:00 AM"
    }
]

const workoutSets = [
    {
        set: "1",
        previos: "12 x 12",
        mark: true,
    },
    {
        set: "2",
        previos: "12 x 12",
        mark: false,
    },
    {
        set: "3",
        previos: "-",
        mark: true,
    },
    {
        set: "4",
        previos: "12 x 12",
        mark: false,
    },
]

const workoutManagerExercises = [
    {
        title: "Squat (Barbell)"
    },
    {
        title: "Standing Calf Raise "
    }
]

const onBoarding = [
    {
        title: "Track Your Goal",
        subTitle: "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
        img: images.onboarding5,
    },
    {
        title: "Get Burn",
        subTitle: "Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever",
        img: images.onboarding6,
    },
    {
        title: "Eat Well",
        subTitle: "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
        img: images.onboarding6,
    }
]

const workoutDifficulty = [
    "Begineer",
    "Intermidiate",
    "Advanced"
]

export default {
    banners,
    slider2,
    ourGymBanners,
    workoutCategory,
    foodList,
    workoutSets,
    workoutManagerExercises,
    onBoarding,
    workoutDifficulty
}