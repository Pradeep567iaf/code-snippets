var count = 0;
var dateTime = new GlideDateTime();
var currentDate = dateTime.getLocalDate();
var grSA = new GlideAggregate('sysapproval_approver');
grSA.addEncodedQuery("state=requested^source_table=sc_req_item"); //Add your own query here alongside with the date conditions.
grSA.addAggregate('count','sysapproval');
grSA.query();
while (grSA.next()) {  
	         var current = grSA.sysapproval.getRefRecord(); 
           gs.eventQueue('event.name',current,current.requested_for); //Add your event name to trigger notification   
  	       count++;
}
