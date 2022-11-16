import React, {useEffect, useState} from "react";

const ProfileStatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus]  = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const disactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


   return(
        <div>
            {!editMode &&
                <div>
                    <snap onDoubleClick = {activateEditMode} >{props.status}</snap>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur= {disactivateEditMode}
                           value={status}>
                    </input>
                </div>
            }
        </div>
    )

}
export default ProfileStatusWithHook;