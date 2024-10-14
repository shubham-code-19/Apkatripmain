<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Filament\Resources\BlogResource\RelationManagers;
use App\Models\Blog;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\Select;

class BlogResource extends Resource
{
    protected static ?string $model = Blog::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                FileUpload::make('blog_image'),
                Select::make('blog_type')
                ->options([
                    "travel"=>"travel",
                    "business"=>"business",
                    "economics"=>"economics",
                    "vacation"=>"vacation"
                ]),
                TextInput::make('blog_title')->required()->live()
                ->required()->minLength(1)->maxLength(300)
                ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                    if ($operation === 'edit') {
                        return;
                    }
                    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $state)));
                  
                   
                    $set('slug',(''.$slug.''));
                }),
                TextInput::make('blog_text'),
                TextInput::make('quotes'),
                RichEditor::make('des1'),
                RichEditor::make('des2'),
                TextInput::make('slug'),






            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                ImageColumn::make('blog_image'),
                TextColumn::make('blog_type'),
                TextColumn::make('blog_title'),
                TextColumn::make('blog_text'),
                TextColumn::make('quotes'),
                TextColumn::make('des1'),
                TextColumn::make('des2')

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }
}
