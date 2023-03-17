export const Clientstable = () => {
    return (
        <div class="content">

            <div class="container">
                <h2 class="mb-5">Clients:</h2>


                <div class="table-responsive custom-table-responsive">

                    <table class="table custom-table">
                        <thead>
                            <tr>



                                <th scope="col">Owner car Name</th>
                                <th scope="col">Car Model</th>
                                <th scope="col">car info</th>
                                <th scope="col">status/<br></br><small class="d-block">Last repair</small></th>
                                <th scope="col">Photo</th>
                            </tr>
                        </thead>
                        <tbody>


                            <tr class="spacer"><td colspan="100"></td></tr>

                            <tr>
                                <td>Sampson Murphy</td>
                                <td>Toyota <br></br> Corola</td>
                                <td>year 2015, diesel engine, ~120 000 km</td>
                                <td> OK 
                                <small class="d-block">Last changed belts on 123 km</small>
                                
                                </td>
                                <td> 
                                    <img src="https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_815.jpg" alt="toyota corolla" />
                                </td>
                            </tr>


                            <tr class="spacer"><td colspan="100"></td></tr>

                            <tr>
                                <td>Sampson Murphy</td>
                                <td>Toyota <br></br> Corola</td>
                                <td>year 2015, diesel engine, ~120 000 km</td>
                                <td> OK 
                                <small class="d-block">Last changed belts on 123 km</small>
                                
                                </td>
                                <td> 
                                    <img src="https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_815.jpg" alt="toyota corolla" />
                                </td>
                            </tr>







                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
}