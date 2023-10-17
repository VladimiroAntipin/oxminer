import ComingSoon from "../../components/ComingSoon/ComingSoon";
import AppStyle from "../../components/App/App.module.css";

function DApp() {
    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <ComingSoon />
                </div>
            </div>
        </>
    )
}

export default DApp;