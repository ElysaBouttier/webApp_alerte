# Generated by Django 3.1.4 on 2021-05-13 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Alert',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('status', models.CharField(max_length=20)),
                ('title', models.CharField(max_length=250)),
                ('beginingDate', models.DateTimeField()),
                ('endingDate', models.DateTimeField()),
            ],
        ),
    ]
