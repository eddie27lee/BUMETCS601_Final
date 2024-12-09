export default function Header(){
    return (
        <header>
            <div class="flexbox">
                <img src={`${process.env.PUBLIC_URL}/images/bu.png`} alt="BU" class="header-image"></img>
            </div>
        </header>
    )
}