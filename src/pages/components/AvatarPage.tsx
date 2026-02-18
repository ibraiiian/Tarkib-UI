import { Avatar, AvatarGroup } from '@/components/ui/avatar'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function AvatarPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Avatar (Foto Profil)</h1>
                <p className="text-slate-600 text-lg">Komponen buat nampilin foto profil user. Ada fallback ke inisial kalo gambar gagal dimuat.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.avatar}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="space-y-8">
                    {/* Sizes */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3 text-center">Ukuran</p>
                        <div className="flex gap-4 items-end justify-center">
                            <Avatar size="sm" fallback="SM" />
                            <Avatar size="default" fallback="DF" />
                            <Avatar size="lg" fallback="LG" />
                            <Avatar size="xl" fallback="XL" />
                        </div>
                    </div>

                    {/* With Images */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3 text-center">Pake Gambar</p>
                        <div className="flex gap-4 items-center justify-center">
                            <Avatar src="https://i.pravatar.cc/80?img=1" alt="Ahmad" />
                            <Avatar src="https://i.pravatar.cc/80?img=5" alt="Fatimah" />
                            <Avatar src="https://i.pravatar.cc/80?img=3" alt="Umar" />
                            <Avatar fallback="IB" />
                        </div>
                    </div>

                    {/* Avatar Group */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3 text-center">Avatar Grup</p>
                        <div className="flex justify-center">
                            <AvatarGroup max={3}>
                                <Avatar src="https://i.pravatar.cc/80?img=10" alt="User 1" />
                                <Avatar src="https://i.pravatar.cc/80?img=11" alt="User 2" />
                                <Avatar src="https://i.pravatar.cc/80?img=12" alt="User 3" />
                                <Avatar fallback="A" />
                                <Avatar fallback="B" />
                            </AvatarGroup>
                        </div>
                    </div>
                </div>
            </ComponentPreview>
        </div>
    )
}
