<div class="relative">
    <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
    <div class="flex {{ $index % 2 === 0 ? 'flex-row' : 'flex-row-reverse' }} items-center">
        <div class="w-5/12 {{ $index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8' }}">
            <div class="space-y-2 group hover:-translate-y-1 transition-transform duration-300">
                <span class="text-primary font-bold">{{ $training['year'] }}</span>
                <h3 class="text-xl font-semibold text-black">{{ $training['title'] }}</h3>
                <p class="text-gray-600 font-medium">{{ $training['institution'] }}</p>
                <p class="text-gray-500">{{ $training['description'] }}</p>
            </div>
        </div>
        <div class="w-1/12"></div>
        <div class="w-5/12"></div>
    </div>
</div>
