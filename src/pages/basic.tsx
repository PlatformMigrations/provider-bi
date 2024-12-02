import DataTableDemo from "../components/table/intex";
import 'tailwindcss/tailwind.css';

export default function Basic(){
    return(

        <div className="bg-white/20 p-4 rounded-3xl">
            <div className="bg-white p-4 rounded-2xl">
                <DataTableDemo/>
            </div>
        </div>
        
    )
}