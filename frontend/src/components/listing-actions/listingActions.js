import listingActionsStyles from "./listingActions.module.css";

import { useRouter } from "next/router";
import { deleteListing } from "@/pages/api/listingsApi";
import { useMutation } from "@tanstack/react-query";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function ListingActions({ url, listingId }) {

    const router = useRouter();

    const mutation = useMutation((listingId) => deleteListing(listingId), {
        onSuccess: () => {
            router.push("/admin/my-listings");
        },
    });

    return (
        <div>
            <FontAwesomeIcon className={listingActionsStyles.iconButton} icon={faPencil} />
            <FontAwesomeIcon className={listingActionsStyles.iconButton} icon={faTrash} onClick={
                () => {
                    mutation.mutate(listingId);
                }
            } />
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
