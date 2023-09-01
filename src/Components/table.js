import React,{Component} from "react";

class Table extends React.Component{
render(){
    return(
        <>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">roll.no</th>
                        <th scope="col">name</th>
                        <th scope="col">age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td scope="row">01</td>
                        <td>john</td>
                        <td>22</td>
                    </tr>
                    <tr >
                        <td scope="row">02</td>
                        <td>jeyavel</td>
                        <td>23</td>
                    </tr>
                    <tr >
                        <td scope="row">03</td>
                        <td>nikki</td>
                        <td>47</td>
                    </tr>
                    <tr >
                        <td scope="row">04</td>
                        <td>charlett</td>
                        <td>37</td>
                    </tr>
                    <tr >
                        <td scope="row">05</td>
                        <td>Triple H</td>
                        <td>53</td>
                    </tr>
                    <tr >
                        <td scope="row">06</td>
                        <td>gold berk</td>
                        <td>54</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        
        </>
    )
}


}
export default Table;
