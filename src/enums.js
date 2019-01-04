import React from 'react';
import * as FontAwesome from 'react-icons/fa';

export const expenseType = {
    MINE: "MINE",
    COUPLE: "COUPLE",
    OTHER: "OTHER"
}

export const expenseCategory = {
    HOME: 'HOME',
    INVESTMENT: 'INVESTMENT',
    PERSONAL_CARE: 'PERSONAL_CARE',
    BANK: 'BANK',
    SHOPPING: 'SHOPPING',
    MISC: 'MISC',
    BILLS_UTILITIES: 'BILLS_UTILITIES',
    WITHDRAWAL_CHECKS_TRANSFER: 'WITHDRAWAL_CHECKS_TRANSFER',
    ENTERTAINMENT: 'ENTERTAINMENT',
    BUSINESS_SERVICES: 'BUSINESS_SERVICES',
    FOOD_DINING: 'FOOD_DINING',
    EDUCATION_CHILDREN: 'EDUCATION_CHILDREN',
    HEALTH: 'HEALTH',
    AUTO_TRANSPORT: 'AUTO_TRANSPORT'
}

export const expenseSubCategory = {
    HOME: {
        RENT: "RENT",
        MAINTENANCE: "MAINTENANCE",
        GARDEN: "GARDEN",
        HOME_INSURANCE: "HOME_INSURANCE",
        HOME_OTHERS: "HOME_OTHERS",
        ELECTRICITY: "ELECTRICITY",
        GAS: "GAS",
        HOME_IMPROVEMENT: "HOME_IMPROVEMENT",
        MISC_UTILITIES: "HOME_IMPROVEMENT",
        WATER: "WATER"
    },
    INVESTMENT: {
        REAL_ESTATE_INSURANCE: "REAL_ESTATE_INSURANCE",
        CRYPTO: "CRYPTO",
        REAL_ESTATE_FUNDS: "REAL_ESTATE_FUNDS",
        REAL_ESTATE_MORTGAGE: "REAL_ESTATE_MORTGAGE",
        STOCK_DIVIDENDS: "STOCK_DIVIDENDS",
        STOCKS: "STOCKS",
        REAL_ESTATE_ACQUISITION: "REAL_ESTATE_ACQUISITION",
        REAL_ESTATE_RENT: "REAL_ESTATE_RENT",
        INVESTMENT_OTHERS: "INVESTMENT_OTHERS"
    },
    PERSONAL_CARE: {
        HAIRDRESSER: "HAIRDRESSER",
        BEAUTY_CARE: "BEAUTY_CARE",
        COSMETICS: "COSMETICS",
        PERSONAL_CARE_OTHERS: "PERSONAL_CARE_OTHERS",
        SPA_MASSAGE: "SPA_MASSAGE"
    },
    BANK: {
        BANKING_INTERESTS: "BANKING_INTERESTS",
        MORTGAGE_REFUND: "MORTGAGE_REFUND",
        MORTGAGE: "MORTGAGE",
        MONTHLY_DEBIT: "MONTHLY_DEBIT",
        BANKING_FEES_CHARGES: "BANKING_FEES_CHARGES",
        BANKING_SERVICES: "BANKING_SERVICES",
        SAVINGS: "SAVINGS",
        BANKING_OTHERS: "BANKING_OTHERS"
    },
    SHOPPING: {
        SPORTING_GOODS: "SPORTING_GOODS",
        SHOPPING_OTHERS: "SHOPPING_OTHERS",
        MOVIES: "MOVIES",
        HIGHTECH: "HIGHTECH",
        GIFTS: "GIFTS",
        Books: "BOOKS",
        CLOTHING_SHOES: "CLOTHING_SHOES",
        LICENSES: "LICENSES",
        MUSIC: "MUSIC"
    },
    MISC: {
        TOBACCO: "TOBACCO",
        MISC_OTHERS: "MISC_OTHERS",
        LAUNDRY_DRY_CLEANING: "LAUNDRY_DRY_CLEANING",
        CHARITY: "CHARITY",
        INSURANCE: "INSURANCE"
    },
    BILLS_UTILITIES: {
        BILLS_OTHERS: "BILLS_OTHERS",
        INTERNET: "INTERNET",
        HOME_PHONE: "HOME_PHONE",
        CABLE_TV: "CABLE_TV",
        MOBILE_PHONE: "MOBILE_PHONE",
        MOVIES_SUBSCRIPTION: "MOVIES_SUBSCRIPTION",
        MUSIC_SUBSCRIPTION: "MUSIC_SUBSCRIPTION"
    },
    WITHDRAWAL_CHECKS_TRANSFER: {
        TRANSFER: "TRANSFER",
        CHECKS: "CHECKS",
        INTERNAL_TRANSFER: "INTERNAL_TRANSFER",
        WITHDRAWALS: "WITHDRAWALS"
    },
    TAXES: {
        TAXES: "TAXES",
        FINE: "FINE",
        INCOME_TAXES: "INCOME_TAXES",
        PROPERTY_TAXES: "PROPERTY_TAXES",
        TAXES_OTHERS: 'TAXES_OTHERS',
        VAT: 'VAT'
    },
    ENTERTAINMENT: {
        CINEMA: "CINEMA",
        BARS_CLUBS: "BARS_CLUBS",
        ENTERTAINMENT_OTHERS: "ENTERTAINMENT_OTHERS",
        HOBBIES: "HOBBIES",
        PETS: 'PETS',
        SPORTS: 'SPORTS',
        TRAVELS_VACATION: 'TRAVELS_VACATION',
        WINTER_SPORTS: 'WINTER_SPORTS',
        MUSEUM_EXPOSITION: 'MUSEUM_EXPOSITION',
        THEATER_MUSICALS: 'THEATER_MUSICALS',
        CONCERTS_FESTIVALS: 'CONCERTS_FESTIVALS',
        SPORT_EXHIBITIONS: 'SPORT_EXHIBITIONS'
    },
    BUSINESS_SERVICES: {
        EMPLOYER_CONTRIBUTIONS: "EMPLOYER_CONTRIBUTIONS",
        ACCOUNTING: "ACCOUNTING",
        ADVERTISING: "ADVERTISING",
        BUSINESS_SERVICES_OTHERS: "BUSINESS_SERVICES_OTHERS",
        CONSULTING: 'CONSULTING',
        DISABILITY_INSURANCE: 'DISABILITY_INSURANCE',
        HIRING_FEES: 'HIRING_FEES',
        LEGAL_FEES: 'LEGAL_FEES',
        MARKETING: 'MARKETING',
        OFFICE_SERVICES: 'OFFICE_SERVICES',
        OFFICE_SUPPLIES: 'OFFICE_SUPPLIES',
        OUTSOURCING: 'OUTSOURCING',
        PRINTING: 'PRINTING',
        SALARY_EXECUTIVES: 'SALARY_EXECUTIVES',
        SHIPPING: 'SHIPPING',
        TRAINING_TAXES: 'TRAINING_TAXES'
    },
    FOOD_DINING: {
        EATING_OUT: "EATING_OUT",
        FOOD_OTHERS: "FOOD_OTHERS",
        COFFEE_SHOP: "COFFEE_SHOP",
        FAST_FOODS: "FAST_FOODS",
        GROCERIES: 'GROCERIES',
        DINING_OUT: 'DINING_OUT'
    },
    EDUCATION_CHILDREN: {
        BABYSITTER_DAYCARE: "BABYSITTER_DAYCARE",
        EDUCATION_CHILDREN_OTHERS: "EDUCATION_CHILDREN_OTHERS",
        PENSION: "PENSION",
        SCHOOL_SUPPLIES: "SCHOOL_SUPPLIES",
        STUDENT_HOUSING: 'STUDENT_HOUSING',
        STUDENT_LOAN: 'STUDENT_LOAN',
        TOYS: 'TOYS',
        TUITION: 'TUITION'
    },
    HEALTH: {
        PHARMACY: "PHARMACY",
        OPTICIAN_EYECARE: "OPTICIAN_EYECARE",
        DENTIST: "DENTIST",
        DOCTOR: "DOCTOR",
        HEALTH_OTHERS: 'HEALTH_OTHERS',
        HEALTH_INSURANCE: 'HEALTH_INSURANCE'
    },
    AUTO_TRANSPORT: {
        TRANSPORT_OTHERS: "TRANSPORT_OTHERS",
        TOLLS: "TOLLS",
        PLANE_TICKET: "PLANE_TICKET",
        GAS_FUEL: "GAS_FUEL",
        CAR_RENTAL: 'CAR_RENTAL',
        AUTO_INSURANCE: 'AUTO_INSURANCE',
        CAR_MAINTENANCE: 'CAR_MAINTENANCE',
        PARKING: 'PARKING',
        PUBLIC_TRANSPORTATION: 'PUBLIC_TRANSPORTATION',
        TRAIN_TICKET: 'TRAIN_TICKET',
        TAXI: 'TAXI'
    }
}

export const expenseSubCategoryIcon = {
    HOME: {
        RENT: <FontAwesome.FaHome />,
        MAINTENANCE: "FaPaintRoller",
        GARDEN: "FaTree",
        HOME_INSURANCE: "FaFire",
        HOME_OTHERS: "FaHome",
        ELECTRICITY: "FaBolt",
        GAS: "FaGasPump",
        HOME_IMPROVEMENT: "FaPaintRoller",
        MISC_UTILITIES: "FaTools",
        WATER: "FaTint"
    },
    INVESTMENT: {
        REAL_ESTATE_INSURANCE: "FaFire",
        CRYPTO: "FaBitcoin",
        REAL_ESTATE_FUNDS: "FaCommentDollar",
        REAL_ESTATE_MORTGAGE: "FaUniversity",
        STOCK_DIVIDENDS: "FaDollarSign",
        STOCKS: "FaDollarSign",
        REAL_ESTATE_ACQUISITION: "city",
        REAL_ESTATE_RENT: "FaHome",
        INVESTMENT_OTHERS: "dollar-sign"
    },
    PERSONAL_CARE: {
        HAIRDRESSER: "hand-scissors",
        BEAUTY_CARE: "heart",
        COSMETICS: "heart",
        PERSONAL_CARE_OTHERS: "heart",
        SPA_MASSAGE: "spa"
    },
    BANK: {
        BANKING_INTERESTS: "university",
        MORTGAGE_REFUND: "university",
        MORTGAGE: "university",
        MONTHLY_DEBIT: "university",
        BANKING_FEES_CHARGES: "university",
        BANKING_SERVICES: "university",
        SAVINGS: "piggy-bank",
        BANKING_OTHERS: "university"
    },
    SHOPPING: {
        SPORTING_GOODS: "football-ball",
        SHOPPING_OTHERS: "shopping-cart",
        MOVIES: "film",
        HIGHTECH: "tv",
        GIFTS: "gifts",
        Books: "book",
        CLOTHING_SHOES: "tshirt",
        LICENSES: "shopping-basket",
        MUSIC: "music"
    },
    MISC: {
        TOBACCO: "smoking",
        MISC_OTHERS: "question",
        LAUNDRY_DRY_CLEANING: "tshirt",
        CHARITY: "hand-holding-usd",
        INSURANCE: "FaFire"
    },
    BILLS_UTILITIES: {
        BILLS_OTHERS: "money-bill",
        INTERNET: "wifi",
        HOME_PHONE: "phone",
        CABLE_TV: "tv",
        MOBILE_PHONE: "mobile-alt",
        MOVIES_SUBSCRIPTION: "film",
        MUSIC_SUBSCRIPTION: "music"
    },
    WITHDRAWAL_CHECKS_TRANSFER: {
        TRANSFER: "money-check",
        CHECKS: "money-check-alt",
        INTERNAL_TRANSFER: "credit-card",
        WITHDRAWALS: "credit-card"
    },
    TAXES: {
        TAXES: "percentage",
        FINE: "percentage",
        INCOME_TAXES: "percentage",
        PROPERTY_TAXES: "percentage",
        TAXES_OTHERS: 'percentage',
        VAT: 'percentage'
    },
    ENTERTAINMENT: {
        CINEMA: "video",
        BARS_CLUBS: "wine-glass-alt",
        ENTERTAINMENT_OTHERS: "person-booth",
        HOBBIES: "football-ball",
        PETS: 'dog',
        SPORTS: 'futbol',
        TRAVELS_VACATION: 'map-marked-alt',
        WINTER_SPORTS: 'snowflake',
        MUSEUM_EXPOSITION: 'palette',
        THEATER_MUSICALS: 'theater-masks',
        CONCERTS_FESTIVALS: 'guitar',
        SPORT_EXHIBITIONS: 'baseball-ball'
    },
    BUSINESS_SERVICES: {
        EMPLOYER_CONTRIBUTIONS: "user-ninja",
        ACCOUNTING: "money-check",
        ADVERTISING: "adversal",
        BUSINESS_SERVICES_OTHERS: "money-check",
        CONSULTING: 'money-check',
        DISABILITY_INSURANCE: 'money-check',
        HIRING_FEES: 'money-check',
        LEGAL_FEES: 'money-check',
        MARKETING: 'money-check',
        OFFICE_SERVICES: 'money-check',
        OFFICE_SUPPLIES: 'money-check',
        OUTSOURCING: 'money-check',
        PRINTING: 'print',
        SALARY_EXECUTIVES: 'money-bill-alt',
        SHIPPING: 'ship',
        TRAINING_TAXES: 'university'
    },
    FOOD_DINING: {
        EATING_OUT: "utensils",
        FOOD_OTHERS: "apple-alt",
        COFFEE_SHOP: "coffee",
        FAST_FOODS: "cookie-bite",
        GROCERIES: <FontAwesome.FaShoppingCart />,
        DINING_OUT: 'utensils'
    },
    EDUCATION_CHILDREN: {
        BABYSITTER_DAYCARE: "baby-carriage",
        EDUCATION_CHILDREN_OTHERS: "university",
        PENSION: "child",
        SCHOOL_SUPPLIES: "pencil-ruler",
        STUDENT_HOUSING: 'FaHome',
        STUDENT_LOAN: 'FaHome',
        TOYS: 'truck-monster',
        TUITION: 'money-bill-alt'
    },
    HEALTH: {
        PHARMACY: "notes-medical",
        OPTICIAN_EYECARE: "eye",
        DENTIST: "tooth",
        DOCTOR: "user-md",
        HEALTH_OTHERS: 'briefcase-medical',
        HEALTH_INSURANCE: 'FaFire'
    },
    AUTO_TRANSPORT: {
        TRANSPORT_OTHERS: "car",
        TOLLS: "car",
        PLANE_TICKET: "plane",
        GAS_FUEL: "gas-pump",
        CAR_RENTAL: 'car-alt',
        AUTO_INSURANCE: 'FaFire',
        CAR_MAINTENANCE: 'wrench',
        PARKING: 'parking',
        PUBLIC_TRANSPORTATION: 'subway',
        TRAIN_TICKET: 'train',
        TAXI: 'taxi'
    }
}