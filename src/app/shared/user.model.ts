export class customersUser{
    id?: string;
    fullName?: string;
    Email?: string;
    password?: string;
    profession?: string;
    username?: string;
    userBio?: string;
    profileImageURL?: string;
    schoolStudent?: string;
    collegeStudent?: string;
    schoolName?: string;
    collegeName?: string;
    schoolStandard?: number;
    collegeMajor?: string;
    phase? : number;
    validationInterest1? : string;
    validationInterest2? : string;
    validationInterest3? : string;   
}

export class loginUser{
    loginEmail?:string;
    loginPassword?:string;
}

export class contactCustomers{
    id? : string;
    firstName? : string;
    lastName? : string;
    Email? : string;
    message? : string;
}

export class Phase1FeedbackDetails{
    id? : string;
    rating? : number;
    usefulTest? : boolean;
    priceTest? : string;
    suggestTest? : boolean;
    phase2Wilingness? : boolean;
    source? : string;
    comments? : string;
}
