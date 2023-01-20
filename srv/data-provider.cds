using {
    Personnels             as per
} from '../db/data-models';

service PersonnelManagement @(impl : './data-provider') {
    entity Personnels as projection on per; 
    @topic : 'Personnel/Created'
    event newPersonnelCreated {
        personnelNo : Personnels:personnelNo;
    };
};

