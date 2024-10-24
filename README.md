<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Airtrav Navbar</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.css" rel="stylesheet" type="text/css" />
    <style>
        .checklist-container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 20px;
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 24px;
        }
        
        .vertical-line {
            position: relative;
        }
        
        .vertical-line::before {
            content: '';
            position: absolute;
            left: 25px;
            top: 30px;
            bottom: 0;
            width: 2px;
            background-color: #e0e0e0;
        }
    </style>
</head>

<body class="bg-gray-50">
    <header class="bg-white shadow-sm">
        <nav class="navbar w-full max-w-7xl mx-auto py-4">
            <!-- Logo -->
            <div class="flex-1">
                <a href="#" class="text-xl font-bold">
                    <img src="logo%20(1).png" alt="Airtrav Logo" class="inline-block w-8 h-8 mr-2">
                    Airtrav
                </a>
            </div>

            <!-- Navigation Links -->
            <div class="flex-none hidden md:flex space-x-6">
                <a href="#" class="text-gray-600 hover:text-black">Things To Do</a>
                <a href="#" class="text-gray-600 hover:text-black">Tour</a>
                <a href="#" class="text-gray-600 hover:text-black">Blog</a>
            </div>

            <!-- Right Section -->
            <div class="flex-none space-x-4 flex items-center">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-sm">USD</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                        <li><a href="#">USD</a></li>
                        <li><a href="#">EUR</a></li>
                        <li><a href="#">GBP</a></li>
                    </ul>
                </div>
                <a href="#" class="text-gray-600 hover:text-black">FAQ</a>
                <button class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5.195A2 2 0 018 3.158V3a2 2 0 00-1 0v.158a2 2 0 010 .847 6.002 6.002 0 00-4.338 10.195L5 17h5m0 0a3 3 0 006 0h-6z" />
                    </svg>
                </button>
                <div class="avatar">
                    <div class="w-10 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
                        <img src="https://via.placeholder.com/150" alt="User Avatar" />
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <!-- Navigation Tabs -->
    <div class="px-4 py-3 bg-gray-50 flex items-center gap-2">
        <button class="btn btn-ghost btn-sm rounded-full bg-white">Route</button>
        <div class="dropdown">
            <button class="btn btn-ghost btn-sm rounded-full bg-white">
                Day by day
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
        <button class="btn btn-ghost btn-sm rounded-full bg-white">Where to stay</button>
        <button class="btn btn-neutral btn-sm rounded-full">Checklist</button>
    </div>

    <!-- Main Content -->
    <div class="checklist-container">
        <!-- Left Sidebar -->
        <div class="bg-white rounded-lg p-4 h-fit vertical-line">
            <h2 class="font-semibold mb-4">The checklist</h2>
            
            <!-- Travel -->
            <div class="flex items-center mb-6 relative">
                <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                </div>
                <span>Travel (2)</span>
            </div>

            <!-- Tickets & Tours -->
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                </div>
                <span>Tickets & Tours (2)</span>
            </div>

            <!-- Hotel -->
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
                <span>Hotel (1)</span>
            </div>

            <!-- Plan Ahead -->
            <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                </div>
                <span>Plan Ahead (4)</span>
            </div>
        </div>

        <!-- Right Content -->
        <div class="bg-white rounded-lg p-6">
            <div class="border-b pb-4 mb-6">
                <h2 class="font-semibold">Check list</h2>
            </div>

            <!-- Initial Flight Details -->
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="flex items-center space-x-4">
                    <div class="w-8 h-8">
                        <svg class="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                        </svg>
                    </div>
                    <div>Bangkok</div>
                    <button class="text-blue-500">Check price</button>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="w-8 h-8">
                        <svg class="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                        </svg>
                    </div>
                    <div>Bangkok</div>
                    <button class="text-blue-500">Check price</button>
                </div>
            </div>

            <!-- Events & Tours Section -->
            <div class="mb-6">
                <h3 class="text-sm font-medium mb-4">Events & Tours (2)</h3>
                <div class="grid grid-cols-2 gap-4">
                    <!-- Tour Card 1 -->
                    <div class="border rounded-lg overflow-hidden">
                        <img src="/api/placeholder/400/200" alt="Bangkok" class="w-full h-40 object-cover"/>
                        <div class="p-4">
                            <h4 class="font-medium">Spots - Bangkok</h4>
                            <button class="text-blue-500 mt-2">Buy tickets</button>
                        </div>
                    </div>
                    <!-- Tour Card 2 -->
                    <div class="border rounded-lg overflow-hidden">
                        <img src="/api/placeholder/400/200" alt="Sea Life Bangkok" class="w-full h-40 object-cover"/>
                        <div class="p-4">
                            <h4 class="font-medium">Sea Life Bangkok</h4>
                            <button class="text-blue-500 mt-2">Buy tickets</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Hotel Section -->
            <div class="mb-6">
                <h3 class="text-sm font-medium mb-4">Hotel (1)</h3>
                <div class="flex items-center justify-between p-4 border rounded-lg">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8">
                            <svg class="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <span>Bangkok</span>
                    </div>
                    <button class="text-blue-500">Check price</button>
                </div>
            </div>

            <!-- Plan Ahead Section -->
            <div>
                <h3 class="text-sm font-medium mb-4">Plan Ahead (4)</h3>
                <div class="space-y-4">
                    <!-- Checklist Items -->
                    <div class="flex items-center justify-between p-4 border rounded-lg">
                        <div class="flex items-center space-x-4">
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2