import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
    return (
        <main>
            <div className="flex flex-wrap justify-space-between gap-4 m-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        </main>
    );
}