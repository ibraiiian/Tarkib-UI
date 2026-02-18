import { Skeleton } from '@/components/ui/skeleton'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function SkeletonPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Skeleton (Kerangka Loading)</h1>
                <p className="text-slate-600 text-lg">Placeholder animasi buat konten yang lagi loading. Bikin user gak bosen nunggu, Akhi.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.skeleton}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full max-w-md space-y-8">
                    {/* Profile Card Skeleton */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3">Kartu Profil Loading</p>
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2 flex-1">
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>
                        </div>
                    </div>

                    {/* Content Skeleton */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3">Konten Loading</p>
                        <div className="space-y-3">
                            <Skeleton className="h-40 w-full rounded-xl" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-4/5" />
                            <Skeleton className="h-4 w-3/5" />
                        </div>
                    </div>

                    {/* List Skeleton */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3">List Loading</p>
                        <div className="space-y-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <Skeleton className="h-10 w-10 rounded-lg" />
                                    <div className="space-y-2 flex-1">
                                        <Skeleton className="h-3 w-2/3" />
                                        <Skeleton className="h-3 w-1/3" />
                                    </div>
                                    <Skeleton className="h-8 w-16 rounded-md" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ComponentPreview>
        </div>
    )
}
