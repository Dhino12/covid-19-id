class SymptomHandler {
     static set dataSymptom(symptomsCovid) {
        const symptomsList = document.querySelector('symptom-list');
        symptomsList.symptoms = symptomsCovid;
     }
}

export default SymptomHandler;
