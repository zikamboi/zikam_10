const clinicpatient={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
Add ClinicPatient
</button>


<table class="table table-striped">
<thread>
        <tr>
            <th>
            ClinicPatientId
             </th>
            <th>
                 ClinicPatientName
             </th>
            <th>
                 DepartmentName
        </th>
        <th>
                DOJ
        </th>
        <th>
                Options
                </th>
            </tr>
     </thread>
     <tbody>
                    <tr v-for="Clinic in ClinicPatient"
                <tr v-for="dep in departments"  >
            <td>{{Clinic.ClinicPatientId}}</td>
        <td>{{Clinic.ClinicPatientName}}</td>
            <td>{{Clinic.DepartmentName}}</td>
                <td>{{Clinic.DateofJoining}}</td>
    
    <td>
                 <button type="button"
             class="btn btn-light mr-1">
            data-bs-toggle="modal"
        data-bs-target="#exampleModal"
             @click="editClick(Clinic)">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
        </button>

                    <button type="button"@click="deleteClick(Clinic.ClinicPatientId)"
                 class="btn btn-light mr-1">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
             <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
    </tbody>
       </thead>
       </table>



            <div class ="modal fade" id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class ="modal-dialog modal-lg modal-dialog-centered">
       <div class="modal-content">
            <div class="modal-header">
                 <h5 class="modal-title" id= "exampleModalLabel">{{modalTitle}}</h5>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
             aria-label="Close"></button>
       </div>

       <div class="modal-body">
                 <div class='d-flex flex-row bd-highlight mb-3>
        < /div class="p-2 w-50 bd-highlight">
                 <div class="input-group mb-3">
            <span class="input-group-text">Name</span>
                <input type = "text" class= "form-control" v-model="Clinicpatient">
            </div>


            <div class="input-group mb-3">
                <span class="input-group-text">Department </span>
                         <selet class="form-select" v-model="Department">
                    <opt v-for="Clinic in department">
                         {{dep.DepartmentName}}
                    </option>
                         </select>
            </div>


            <div class="input-group mb-3">
                 <span class="input-group-text">DOJ </span>
                <input type="date" class="form-select" v-model="DateOfJoining">
                
    </div>
            <div class="p-2 w-50 bd-highlight">
    <img width="250px height="250px"
             :src="PhotoPath+PhotoFileName"/>
         <input class="m-2" type="file"@change="imageUpload">
    
    </div>
        <button type="button" @click="createClick()"
                v-if="ClinicPatientId==0" class "btn-primary">
        
    Create
        </button>
    <button type="button" @click="updateClick()"
            v-if="ClinicPatientId!=0" class "btn-primary">
     Update
            </button>
         </div>
       `,

       data(){ 
           return{
               departments:[],
               Clinicpatient:[],
               modalTitle:"",
               ClinicpatientName:"",
               ClinicpatientId:0,
               Department:"",
               DateOfJoining:"",
               PhotoFileName:"anonymous.png",
               PhotoPath:variables.PHOTOS_URL

           }
       },

methods:{
    refreshData(){
        axios.get(variables.API_URL+"Clinicpatient")
        .then((response)=>{
            this.departments=response.data;
        });
    
            axios.get(variables.API_URL+"department")
            .then((response)=>{
                this.departments=response.data;
            });
},
    addClick(){
        this.modalTitle="Add Clinicpatient";
        this.ClinicpatientId=0;
        this.ClinicpatientName="";
        this.Department="",
        this.DateOfJoining="",
        this.PhotoFileName="anonymous.png"
    },
    editClick(Click){
        this.modalTitle="Edit Clinicpatient";
        this.ClinicpatientId=Click.ClinicpatientId;
        this.ClinicpatientName=Click.ClinicpatientName;
        this.Department=Click.Department,
        this.DateOfJoining=Click.DateOfJoining,
        this.PhotoFileName=Click.PhotoFileName
    },
    createClick(){
        axios.post(variables.API_URL+"department",{
           ClinicpatientName:this.ClinicpatientName,
           Department:this.ClinicpatientName,
           DateOfJoining:this.Department,
           PhotoFileName:this.PhotoFileName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
            
        });
    },

    updateClick(){
        axios.put(variables.API_URL+"Clinicpatient",{
            ClinicpatientId:this.ClinicpatientId,
            ClinicpatientName:this.ClinicpatientName,
           Department:this.Department,
           DateOfJoining:this.Department,
           PhotoFileName:this.PhotoFileName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
            
        });
    },
    deleteClick(id){
        if (!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"Clinic/"+id)
        .then((response)=>{
            this.departments=response.data;
        });
    },
    imageUpload(event){
        let formData=new FormData();
        formData.append('file', event.target.files[0])
        axios.post(
            variables.API_URL + "Clinic/savefile",
            formData)
            .then((response) => {
                this.PhotoFileName=response.data;
            });
        
    }
    
},
mouted:function(){
    this.refreshData();

}
}