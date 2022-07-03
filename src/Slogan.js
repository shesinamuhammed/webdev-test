let header = 'PALOMA'
let slogan = "LET HERE THE LATyEST TOUR SEE SHOPf WATCH PERSONAL"
let slogs = slogan.split(' ')
const Slogan = ()=> {
    return (
        <div className='content'>
          <div className="sidebar">
              <div className="header">
                <svg viewBox="0 -5 70 20">
                    <text x="2" y="12" fill ="#fff">{header} </text>
                </svg>           
              </div>
              <div className="list">
                {slogs.map((slog,index) => <div className ="list-item" key={index}>
                     <svg viewBox="0 12 120 11">
                    <text x="3" y="21"fill ="#fff" fontSize="10" fontWeight="800">{slog} 
                    </text>
                     </svg>  
                    </div>)}
              </div>
            
              


          </div>
          
        </div>
    );
  }
  
  export default Slogan;