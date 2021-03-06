import React from 'react';
import './cursos.css';
import swal from 'sweetalert';

class cursos extends React.Component{
    
    onClick=(e)=>{
        swal("Enviado correctamente" ,"", "success");
    }
    render(){

        

        return(

            <div className="container">
                 <div className="row m-1">
                    <div className="col-12 ">
                        <h3>Etica de la profesion</h3>
                        <h6>Ceron, Fernando</h6>
                    </div>
                 
                 </div>

                 <div className="row m-2 fondocurso">
                 <div className="col-12">
                  <p className="fuente-tamano">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue sapien ut faucibus rutrum. Cras semper pharetra libero quis laoreet. Sed eu consequat lectus, nec suscipit urna.</p>

                    <a href="#"><i class="far fa-file-pdf iconopdf"></i> Sylabus</a>
                 </div>
                <div className="col-12 mt-3">
                    <h5>Recursos</h5>

                    <div className="row mb-4">
                        
                        <div className="col-12 pl-5 pr-5">
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h6>semana 1: TEMA</h6>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                <div className="row">
                                        <div className="col-12">
                                             <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>

                                        </div>
                                        <div className="col-12">
                                            <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                        </div>
                                        <div className="col-12">
                                            <h6>Tarea : descripcion de la tarea</h6>
                                            <div class="form-group mb-0">
                                                <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                <input type="file" id="ejemplo_archivo_1"/>
                                            </div>
                            
                                            <button type="submit" class="btn  btn-small color-boton"onClick={this.onClick}>Enviar</button>
                                        </div>
                                </div>
                                    
                                </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingDos">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseDos" aria-expanded="false" aria-controls="collapseDos">
                                            <h6>semana 2: TEMA</h6>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseDos" class="collapse" aria-labelledby="headingDos" data-parent="#accordion">
                                <div class="card-body">
                                <div className="row">
                                        <div className="col-12">
                                             <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>

                                        </div>
                                        <div className="col-12">
                                            <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                        </div>
                                        <div className="col-12">
                                            <h6>Tarea : descripcion de la tarea</h6>
                                            <div class="form-group mb-0">
                                                <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                <input type="file" id="ejemplo_archivo_1"/>
                                            </div>
                            
                                            <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>Enviar</button>
                                        </div>
                                </div>
                                    
                                </div>
                                </div>
                            </div>
                       
                            <div class="card">
                                <div class="card-header" id="headingTres">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTres" aria-expanded="false" aria-controls="collapseTres">
                                            <h6>semana 3: TEMA</h6>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseTres" class="collapse" aria-labelledby="headingTres" data-parent="#accordion">
                                <div class="card-body">
                                <div className="row">
                                        <div className="col-12">
                                             <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>

                                        </div>
                                        <div className="col-12">
                                            <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                        </div>
                                        <div className="col-12">
                                            <h6>Tarea : descripcion de la tarea</h6>
                                            <div class="form-group mb-0">
                                                <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                <input type="file" id="ejemplo_archivo_1"/>
                                            </div>
                            
                                            <button type="submit" class="btn  btn-small color-boton">Enviar</button>
                                        </div>
                                </div>
                                    
                                </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingCuatro">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseCuatro" aria-expanded="true" aria-controls="collapseCuatro">
                                            <h6>semana 4: TEMA</h6>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseCuatro" class="collapse" aria-labelledby="headingCuatro" data-parent="#accordion">
                                <div class="card-body">
                                <div className="row">
                                        <div className="col-12">
                                             <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>

                                        </div>
                                        <div className="col-12">
                                            <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                        </div>
                                        <div className="col-12">
                                            <h6>Tarea : descripcion de la tarea</h6>
                                            <div class="form-group mb-0">
                                                <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                <input type="file" id="ejemplo_archivo_1"/>
                                            </div>
                            
                                            <button type="submit" class="btn  btn-small color-boton">Enviar</button>
                                        </div>
                                </div>
                                    
                                </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingCinco">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseCinco" aria-expanded="false" aria-controls="collapseCinco">
                                            <h6>semana 5: TEMA</h6>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseCinco" class="collapse" aria-labelledby="headingCinco" data-parent="#accordion">
                                <div class="card-body">
                                <div className="row">
                                        <div className="col-12">
                                             <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>

                                        </div>
                                        <div className="col-12">
                                            <a href="#"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                        </div>
                                        <div className="col-12">
                                            <h6>Tarea : descripcion de la tarea</h6>
                                            <div class="form-group mb-0">
                                                <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                <input type="file" id="ejemplo_archivo_1"/>
                                            </div>
                            
                                            <button type="submit" class="btn  btn-small color-boton">Enviar</button>
                                        </div>
                                </div>
                                    
                                </div>
                                </div>
                            </div>
                       
  {/* <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
    
     */}
    
    </div>
                        </div>
                    </div>


                </div>
                 
                 
                 
                 </div>
            </div>




        )



    }
}
export default cursos;