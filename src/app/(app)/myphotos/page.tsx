'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Folder, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';


interface Category {
  id: string;
  name: string;
  coverImage: PayloadMedia;
  images: { id: string; image: PayloadMedia }[];
}

export interface PayloadMedia {
    id: string;
    url: string;
    alt?: string;
}

export default function MyPhotos() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [activeImgIdx, setActiveImgIdx] = useState<number | null>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const fetchPhotos = async () => {
        try {
            const response = await axios.get('/api/photo-categories?depth=1');
            setCategories(response.data.docs);
        } catch (error) {
            console.error('Hiba történt a képek lekérésekor:', error);
        } finally {
            setIsLoading(false);
        }
        };

        fetchPhotos();
    }, []);

    if (isLoading) {
        return (
        <div className="container mx-auto px-4 py-20 text-center">
            <p className="text-muted-foreground animate-pulse">Képek betöltése...</p>
        </div>
        );
    }

    const currentCategory = categories.find((cat) => cat.id === selectedCategory);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl p-4 my-6 font-bold text-center border border-bgSecondary rounded-lg bg-bgSecondary">
            My Photos
            </h1>
            <div className="flex flex-col md:flex-row gap-6 mb-8">
            <aside className="w-full md:w-64 flex flex-col gap-2">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-2">
                {t?.myphotos?.theme_name || 'Témák'}
                </h2>
                <Button
                variant={selectedCategory === null ? 'secondary' : 'ghost'}
                className="justify-start gap-2"
                onClick={() => setSelectedCategory(null)}
                >
                <Folder className="w-4 h-4" /> 
                </Button>
                {categories.map((cat) => (
                <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? 'secondary' : 'ghost'}
                    className="justify-between text-left"
                    onClick={() => setSelectedCategory(cat.id)}
                >
                    <span className="flex items-center gap-2 truncate">
                    <ImageIcon className="w-4 h-4 text-muted-foreground" />
                    {cat.name}
                    </span>
                </Button>
                ))}
            </aside>
            <main className="flex-1">
                {!currentCategory ? (
                <div>
                    <h1 className="text-2xl font-bold mb-6">
                    {t?.myphotos?.galerie_themes || 'Galéria témák'}
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Card
                        key={cat.id}
                        className="group cursor-pointer overflow-hidden hover:shadow-md transition-all border-border"
                        onClick={() => setSelectedCategory(cat.id)}
                        >
                        <AspectRatio ratio={4 / 3} className="bg-muted relative flex items-center justify-center">
                            {cat.coverImage ? (
                                <Image
                                src={cat.coverImage.url}
                                alt={cat.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            ) : (
                                <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
                            )}
                        </AspectRatio>
                        <CardContent className="p-4 flex justify-between items-center">
                            <div>
                            <h3 className="font-semibold text-lg">{cat.name}</h3>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
                ) : (
                <div>
                    <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">{currentCategory.name}</h1>
                        <p className="text-sm text-muted-foreground">
                        {t?.myphotos?.click_to_extend || 'Kattints a nagyításhoz'}
                        </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setSelectedCategory(null)}>
                        {t?.myphotos?.back_text || 'Vissza'}
                    </Button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {currentCategory.images.map((img, idx) => (
                        <div
                        key={img.id}
                        className="group cursor-pointer rounded-lg overflow-hidden border bg-muted"
                        onClick={() => setActiveImgIdx(idx)}
                        >
                        <AspectRatio ratio={1} className="relative flex items-center justify-center">
                            {img.image.url ? (
                                <Image
                                src={img.image.url}
                                alt={img.image.url}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-200"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            ) : (
                                <ImageIcon className="w-8 h-8 text-muted-foreground/30" />
                            )}
                        </AspectRatio>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </main>

            <Dialog open={activeImgIdx !== null} onOpenChange={() => setActiveImgIdx(null)}>
                <DialogContent className="max-w-4xl p-2 bg-black/95 border-none text-white">
                {currentCategory && activeImgIdx !== null && (
                    <Carousel opts={{ startIndex: activeImgIdx }} className="w-full max-w-3xl mx-auto">
                    <CarouselContent>
                        {currentCategory.images.map((img) => (
                        <CarouselItem key={img.id}>
                            <div className="flex items-center justify-center p-2 relative w-full h-[75vh]">
                            <Image
                                src={img.image.url}
                                alt={img.image.url}
                                fill
                                className="object-contain rounded-lg"
                            />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 border-none text-white" />
                    <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 border-none text-white" />
                    </Carousel>
                )}
                </DialogContent>
            </Dialog>

            </div>
        </div>
    );
}