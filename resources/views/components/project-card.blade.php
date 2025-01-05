<div class="project-card cursor-pointer flex flex-col bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
    <h3 class="text-xl font-semibold text-primary mb-4 flex-grow">
        {{$title}}
    </h3>
    <div class="w-full h-auto aspect-w-16 aspect-h-9">
        <img src="{{ $image }}"
             alt="{{$alt}}"
             class="w-full h-full object-cover rounded-lg">
    </div>
</div>
