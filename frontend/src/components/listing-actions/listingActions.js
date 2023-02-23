import listingActionsStyles from "./listingActions.module.css";

import { useRouter } from "next/router";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function ListingActions({ url }) {

    const router = useRouter();

    return (
        <div>
            <FontAwesomeIcon className={listingActionsStyles.iconButton} icon={faPencil} />
            <FontAwesomeIcon className={listingActionsStyles.iconButton} icon={faTrash} />
            <FontAwesomeIcon
                className={listingActionsStyles.iconButton}
                onClick={() => {
                    router.push(`/listing/${url}`);
                }}
                icon={faEye}
            />
        </div>
    );
}
