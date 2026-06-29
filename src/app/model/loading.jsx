import { Skeleton } from "@heroui/react";

const ModelsLoading = () => {
    return (
        <div className="grid w-full max-w-xl grid-cols-3 gap-4 mx-auto top-5">
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
        </div>
    );
};

export default ModelsLoading;