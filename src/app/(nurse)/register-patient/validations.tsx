export function isIdValidV (id: string){
    return /^[0-9]+$/.test(id);
} 
export function isFullNameValidV (fullname: string){
    return fullname.trim().split(" ").length >= 3;
} 
export function isEmailValidV (email: string){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} 
export function isDateValidV (birthDate: string) {
    const date = new Date(birthDate);
    const now = new Date();
    return !isNaN(date.getTime()) && date <= now;
}
export function isPhoneNumberValidV (phoneNumber: string){
    return /^[0-9]{7,9}$/.test(phoneNumber);
} 
export function isCellPhoneNumberValidV (cellPhoneNumber: string){
    return /^\+?[0-9]{10,13}$/.test(cellPhoneNumber);
} 
export function isWeightValidV (weight: string) {
    const weightNumber = Number(weight);
    return !isNaN(weightNumber) && weightNumber > 0 && weightNumber < 500;
};
export function isHeightValidV (height: string) {
    const heightNumber = Number(height);
    return !isNaN(heightNumber) && heightNumber > 0 && heightNumber < 300;
};