const cds = require("@sap/cds");

class PersonnelManagement extends cds.ApplicationService {
    async init() {
        const messaging = await cds.connect.to("messaging");
        
        this.after("CREATE", "Personnels", async(req, res) => {
            
            await messaging.emit("cap/messaging/cap-events-msg-publisher-ems/Personnel/Created", { personnelNo: req.personnelNo });
        });

        await super.init();
    }
}



module.exports = { PersonnelManagement};