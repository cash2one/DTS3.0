﻿# coding=UTF-8"""dts URL ConfigurationThe `urlpatterns` list routes URLs to views. For more information please see:    https://docs.djangoproject.com/en/1.10/topics/http/urls/Examples:Function views    1. Add an import:  from my_app import views    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')Class-based views    1. Add an import:  from other_app.views import Home    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')Including another URLconf    1. Import the include() function: from django.conf.urls import url, include    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))"""from django.conf.urls import include, urlfrom django.conf.urls.static import staticfrom django.conf import settingsfrom django.contrib import adminfrom eshop.views import home, eshop_home, captcha_smsurlpatterns = [    url(r'^$', eshop_home, name='home'),    url(r'^test/$', home, name='test'),    url(r'^admin/', admin.site.urls),	url(r'^common/', include('common.urls', namespace='common')),    url(r'^dtsadmin/', include('dtsadmin.urls', namespace='dtsadmin')),    url(r'^dtsauth/', include('dtsauth.urls', namespace='dtsauth')),    url(r'^eshop/', include('eshop.urls', namespace='eshop')),    url(r'^good/', include('good.urls', namespace='good')),    url(r'^order/', include('order.urls', namespace='order')),    url(r'^promotion/', include('promotion.urls', namespace='promotion')),    url(r'^captcha/', include('captcha.urls')),    url(r'^captcha/sms/(?P<phone_number>\d+)/$', captcha_sms, name='captcha_sms'),    url(r'^ckeditor/', include('ckeditor_uploader.urls')),]if settings.DEBUG:    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)# django-debug-toolbarif settings.DEBUG:    import debug_toolbar    urlpatterns = [        url(r'^__debug__/', include(debug_toolbar.urls)),    ] + urlpatterns