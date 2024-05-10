import './projects.css';
import snp from './media/images/qg.png'
import bs from './media/images/bs.png'
function Projects(){
    console.log("hi")
    return(
        <div className='pr_projects'>
        <a href='/'><h3 className='home_shrt'>Home</h3></a>
        <h1 className='head_projects'>Projects</h1>
        <div className="projects">
            <table>
                <tr>
                    <td>
                        <a href="#"><img className='snp actv' src={snp}></img></a>
                    </td>
                    <td>
                        <a href="#"><img className='snp actv' src={bs}></img></a>
                    </td>
                    <td>
                        <a href="#"><img className='snp actv' src={bs}></img></a>
                    </td>


                </tr>

                <tr>
                   
                </tr>
            </table>
        </div>
        </div>
    )
}
export default Projects;